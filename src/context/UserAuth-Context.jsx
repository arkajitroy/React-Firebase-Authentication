import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../authentication/firebase";

// creating an context
const userAuthContext = createContext();

// Provider Function
export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // signup function
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signin function
  const login = (email, password) => {
    console.log("Email -> ", email);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sing out function
  const logOut = () => {
    return signOut(auth);
  };

  // google signin function
  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Authentication ", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuthContext.Provider
      value={{ user, signUp, login, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
};
// wrapping the use context
export const UseUserAuth = () => {
  return useContext(userAuthContext);
};
