import React, { useContext, useState, useEffect } from "react";
//*firestore storage
import { storage } from "../firebase/config";
//*Storage Methods
//ref is reference to the storage location/bucket
import { ref, uploadBytes } from "firebase/storage";
//*random generator
import { v4 } from "uuid";

//*Context to export
const StorageContext = React.createContext();

export function useStorage() {
    return useContext(StorageContext);
}

export function StorageProvider({ children }) {
    //!STATE
    // const [toolImg, setToolImg] = useState(null);
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
    
      //executes upload
      uploadBytes(storageRef, image).then(() => {
        alert("Image uploaded successfully");
      });
    }

    //!STATE PASSED TO COMPONENTS
      const storageState = {
        uploadImage
    };

  //!RENDER
  return (
    <StorageContext.Provider value={storageState}>
    {children}
    </StorageContext.Provider>
  )
}

