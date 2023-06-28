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
    
      //!NEW 
      await uploadBytes(storageRef, image);
  
      try {
        const url = await getDownloadURL(storageRef);
        setUploadedImageUrl(url);
        console.log("imageURL", url);
        alert("Image uploaded successfully");
      } catch (error) {
        console.log("Error getting image download URL:", error);
      }











      //!ORIGINAL
      // //executes upload
      // uploadBytes(storageRef, image).then(() => {
      //   alert("Image uploaded successfully");

      //   //!Get the uploaded image URL
      //   //ref to all images in folder
      //   const imageListRef = ref(storage, "images");
        
      //   //*Pull entire list 
      //   listAll(imageListRef).then(
      //     (res) => {
      //       console.log("res", res);
      //       //!grab the current image download - one we just uploaded
      //       const itemRef = res.items[0];

      //       //*grab the download URL
      //       getDownloadURL(itemRef).then((url) => {
      //         console.log("imageURL", url);
      //         if(url !== null) {
      //           setUploadedImageUrl(url);
      //         }
      //       });
      //     }
      //   );
      // });
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

