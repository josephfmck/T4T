import React, { useContext, useState, useEffect } from "react";
//*firestore database
import { db } from "../firebase/config";
//*DB Methods 
    //? getDoc = 1 doc, getDocs = arr of docs
import { getDocs, collection, onSnapshot, addDoc } from "firebase/firestore";

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
    const [tool, setTool] = useState({});
    const [DBloading, setDBLoading] = useState(true);


    //!REFS
        //? db, "key" - name of collection in firebase
    const collectionRef = collection(db, "tools");

    //!FIRESTORE DB METHODS
    //*Create
    async function addTool(name, duration, price, image) {
        //?id will be auto generated
        await addDoc(collectionRef, {
            name,
            duration,
            price,
            image
        });
        setTool({ name, duration, price, image });
    }
    //*Read 
    async function getToolsList() {
        //get snapshot of collection
        //?pass in ref to collection
        const data = await getDocs(collectionRef);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }));
        setToolsList(filteredData);
        setDBLoading(false);
        console.log(filteredData);
        return filteredData;
    }

    //!ISSUE: useEffect called infinitely


    //!STATE PASSED TO COMPONENTS
    const dbState = {
        toolsList,
        getToolsList,
        addTool
    };

    //!RENDER
    return (
        <DBContext.Provider value={dbState}>
            {children}
        </DBContext.Provider>
    );
}
