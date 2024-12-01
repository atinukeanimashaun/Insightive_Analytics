import React, { createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create an account
  const createUser = async (email, password, firstName, lastName, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with first name, last name, and username
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        photoURL: `https://ui-avatars.com/api/?name=${firstName}+${lastName}`,
      });

      // Set user state
      setCurrentUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        username,
      });

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Sign in with Google
  const signUpWithGmail = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      // Update user state
      setCurrentUser(user);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Login using email & password
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user state
      setCurrentUser(user);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Logout
  const doSignOut = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null); // Clear user state
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Password reset
  const doPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return "Password reset email sent!";
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Update profile
  const updateUserProfile = async (name, photoURL) => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });

        // Update the user state
        setCurrentUser((prevUser) => ({
          ...prevUser,
          displayName: name,
          photoURL,
        }));

        return "Profile updated successfully!";
      } else {
        throw new Error("No authenticated user found.");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Monitor authenticated user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Context value
  const authInfo = {
    currentUser,
    createUser,
    signUpWithGmail,
    login,
    doSignOut,
    doPasswordReset,
    updateUserProfile,
    loading,
  };

  return <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
