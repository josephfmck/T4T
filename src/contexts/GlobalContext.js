import React, { createContext, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [loginCheck, setLoginCheck] = useState(false);

  //!render out state to use for login component
  return (
    <GlobalContext.Provider value={{ loginCheck, setLoginCheck }}>
      {children}
    </GlobalContext.Provider>
  );
};

