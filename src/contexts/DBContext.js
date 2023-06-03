import React, { useContext, useState, useEffect } from "react";
//*firestore database
import { db } from "../firebase/config";
//*DB Methods 
    //? getDoc = 1 doc, getDocs = arr of docs
import { getDocs, collection, onSnapshot } from "firebase/firestore";

//*Context to export 
const DBContext = React.createContext();

//*Executes DBContext - for component usage
export function useDB() {
    return useContext(DBContext);
}

//*Context Provider 
export function DBProvider({ children }) {
    //!STATE 
    const [toolsList, setToolsList] = useState([]);
    const [DBloading, setDBLoading] = useState(true);

    //!REFS
        //? db, "key" - name of collection in firebase
    const toolsListRef = collection(db, "tools");

    //!FIRESTORE DB METHODS
    //*Create
    //*Read 
    async function getToolsList() {
        //get snapshot of collection
        //?pass in ref to collection
        const data = await getDocs(toolsListRef);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }));
        setToolsList(filteredData);
        console.log(filteredData);
        return filteredData;
    }

    //*Query Snapshot
    //*Update tools list for useEffect (outside useEffect so not called infinitely)
    const updatedToolsListSnapShot = (querySnapshot) => {
        const updatedToolsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setToolsList(updatedToolsList);
      setDBLoading(false);
    };

    //!ON RENDER 
    useEffect(() => {
        //*whenever db updates, map through entire collection
            //pass in the snapshot of the collection
        const unsubscribe = onSnapshot(toolsListRef, updatedToolsListSnapShot);

        //cleanup function
        return () => {
            // Unsubscribe when the component unmounts
            unsubscribe();
        };
    }, [toolsListRef]);

    //!STATE PASSED TO COMPONENTS
    const dbState = {
        toolsList,
        getToolsList
    };

    //!RENDER
    return (
        <DBContext.Provider value={dbState}>
            {!DBloading && children}
        </DBContext.Provider>
    );
}
