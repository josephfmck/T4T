import React, { useContext, useState, useEffect } from "react";
//*firestore storage
import { storage } from "../firebase/config";
//*Storage Methods
//ref is reference to the storage location/bucket
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
//*random generator
import { v4 } from "uuid";

//*Context to export
const StorageContext = React.createContext();

export function useStorage() {
    return useContext(StorageContext);
}

export function StorageProvider({ children }) {
    //!STATE
    const [imagesList, setImagesList] = useState([]);
    //url of image that was uploaded 
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null); 

    
    //!REFS 

    //!STORAGE METHODS
    //*upload image to firebase storage location
    async function uploadImage(image) {
      if(!image) {
        return;
      }
      //img sending to storage, added with random string to avoid overwriting
      //?will go to images folder in storage (may need to specify user later)
      const storageRef = ref(storage, `images/${image.name + v4()}`);
    
      //!CHAIN IT AFTER UPLOAD FINISHES
      const foo = await uploadBytes(storageRef, image);
      const itemRef = foo.ref;
      console.log(`initial url: ${foo.metadata.url}`);
  
      //*grab the download URL
      const url = await getDownloadURL(itemRef);
      console.log(`subsequent url: ${url}`);
      if(!url){
        console.error(`No url`);
      }

      setUploadedImageUrl(url);
      console.log("imageURL", url);
      alert("Image uploaded successfully");

      return url;
    }


    //*grabs all images from Storage
    async function getAllImages() {
      //ref to all images in folder
      const imageListRef = ref(storage, "images");
      listAll(imageListRef).then(
        (res) => {
          console.log("res", res);
          //clear imagesList state
          setImagesList([]);
          //grab each image download URL
          res.items.forEach((itemRef) => {
            getDownloadURL(itemRef).then((url) => {
              //?grab current list state and url to the end
              setImagesList((prev) => [...prev, url]);
            });
          });
        }
      );
    }

    //!STATE PASSED TO COMPONENTS
      const storageState = {
        uploadImage,
        getAllImages,
        imagesList,
        uploadedImageUrl
    };

  //!RENDER
  return (
    <StorageContext.Provider value={storageState}>
    {children}
    </StorageContext.Provider>
  )
}

