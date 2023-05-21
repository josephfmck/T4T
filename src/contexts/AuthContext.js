import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "../firebase";

//*actual context to export for entire application
const AuthContext = React.createContext();

//*1 Executes AuthContext - for component usage
export function useAuth() {
  return useContext(AuthContext);
}

//*Provides context
export function AuthProvider({ children }) {
  //!STATE
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //!FIREBASE AUTH METHODS
  //*Create and get current user through ASYNC form submission
  //?returns promise
  function signup(email, password) {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  }

  //*Login user through ASYNC form submission
  //?checks firebase for already signed up user
  function login(email, password) {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  }

  function logout() {
    //!Firebase auth method
    return signOut(firebaseAuth);
  }

  useEffect(() => {
    //*!firebase auth method - tells us what user signed up as State
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      //sets state to obj or null
      setCurrentUser(user);
      //done if checking if user is already signed in
      setLoading(false);
    });

    //*executes when component unmounted
    //*resets/removes user state
    return unsubscribe;
  }, []);

  //!STATE PASSED TO COMPONENTS
  const authenticationState = {
    currentUser,
    signup,
    login,
    logout
  };

  //!RENDER
  //?children - components passed in as props (<App/> etc.)
  //*returning context provider
  //?if not loading then render out
  //?NOT rendering until setCurrentUser is exec for first time
  return (
    <AuthContext.Provider value={authenticationState}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

//!--> useAuth -> Signup.js & Login.js etc. components
