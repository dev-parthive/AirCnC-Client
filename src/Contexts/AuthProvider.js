import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'
import app from '../Firebase/Firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
  // set state to keep user 
  const [ loading, setLoading ] = useState(true)
  // set loading 
  const [user, setUser ]= useState(null)
  console.log(user)


  // 1. create user 
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // 2. Update Name 
  const updateUserProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  // 3. email verify 
  const emailVerify = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser);
  }

  // 4. signInWithGoogle 
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
   // signInWithGithub
   const githubSign = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
   }
  // 5.Logout 
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  // 6. Login with password 
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // 7.Forget Password 
  const resetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  // 8. Observer for user notice user loggedIn or not 
  useEffect(() => {
    // this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth,
      currentUser => {
        setUser(currentUser)
        setLoading(false)
      })
    return () => {
      // this part will execute once the component is unmounted 
      unsubscribe()
    }
  }, [])


  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    emailVerify,
    googleSignIn,
    logOut,
    signIn,
    resetPassword,
    setLoading, 
    githubSign
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;