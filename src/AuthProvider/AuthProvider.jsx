import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Fixed: Correctly initialize state

  // SIGNUP: Create user function
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // SIGNIN: User SignIn function
  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // SIGNOUT: User SignOut function
  const signOutUser = async () => {
    setLoading(true);
    try {
      return await signOut(auth);
    } finally {
      setLoading(false); // Ensure loading is set to false after sign-out
    }
  };

  // GOOGLE AUTH: User SignIn with Google AuthProvider
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleAuth = async () => {
    setLoading(true);
    try {
      return await signInWithPopup(auth, googleProvider);
    } finally {
      setLoading(false);
    }
  };

  // Get the current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading once auth state is determined
    });
    return () => unsubscribe();
  }, []);
  // // User Profile: user profile update
  // const userProfile = async (userProfileData) => {
  //   try {
  //     return await updateProfile(auth.currentUser, userProfileData);
  //   } finally {
  //   }
  // };
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    handleGoogleAuth,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-600"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
