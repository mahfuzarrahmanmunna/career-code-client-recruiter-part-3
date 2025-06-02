import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../../Firebase/firebase.init';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    // Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login user
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Login with Google
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // Update user profile
    const updatedUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    // Logout user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Observe auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser.email) {
                axios.post('http://localhost:3000/jwt', { email: currentUser.email }, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        });

        return () => unsubscribe();
    }, []);

    const userInfo = {
        user,
        loading,
        createUser,
        logInUser,
        updatedUser,
        logOutUser,
        loginWithGoogle,
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
