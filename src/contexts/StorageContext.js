//! THIS IS IMPLEMENTED LATER FROM THE LEND PAGE FUNCTIONALITY 



import React, { useContext, useState, useEffect } from "react";
//*firestore storage
import { storage } from "../firebase/config";
//*Storage Methods
//ref is reference to the storage location/bucket
import { ref } from "firebase/storage";

//*Context to export
const StorageContext = React.createContext();

export function useStorage() {
    return useContext(StorageContext);
}

export function StorageProvider() {
    //!STATE
    //!REFS 
    // const storageRef = ref(storage, `images${image}`);
    //!STORAGE METHODS

  //!RENDER
  return (
    <div>
      
    </div>
  )
}

export default StorageProvider
