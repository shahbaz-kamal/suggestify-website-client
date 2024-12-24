import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import Swal from "sweetalert2";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   *creating user with email & password
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   *signIn /LogIn with email & password

  const signInWithEmailUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // *google sign in
  const googleProvider = new GoogleAuthProvider();

  const googleSignInUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   *sign out/ log out

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   *updating profile

  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user -->", currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    updateUser,
    logoutUser,
    googleSignInUser,
    signInWithEmailUser,
    registerUser,
    Toast,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
