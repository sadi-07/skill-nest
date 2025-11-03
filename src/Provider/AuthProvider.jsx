import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const GUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user;
        loggedUser.reload().then(() => {
          setUser(auth.currentUser);
          setLoading(false);
        });

        return result;
      }).catch(error => {
        setLoading(false);

        throw error;
      })
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if(currentUser){
        await currentUser.reload();
        setUser(auth.currentUser);
      } else {setUser(null)}
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const removeUser = () => {
    return signOut(auth)
        .then(() => {
            toast.success("Logout Successful!")
        })
        .catch(error => {
            toast.error("Logout Failed!")
        })
  }

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  const authData = { user, setUser, createUser, removeUser, logInUser, loading, setLoading, GUser };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
