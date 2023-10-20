/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/Firebase.config';

export const Authcontext = createContext(null);
const provider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading ,setLoading] = useState(true)


    // register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    // google sigin 
    const googlesign =()=>{
        return signInWithPopup(auth,provider)
    }

    //    authchange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, presentUser => {
            setUser(presentUser)
            setLoading(false)
        });

        return () => {
            unsubscribe()
        }


    }, [])



    const AuthInfo = {

        user,
        createUser,
        signin,
        logOut,
        googlesign,
        loading


    }
    return (
        <Authcontext.Provider value={AuthInfo} >
            {children}

        </Authcontext.Provider>
    );
};

export default AuthProvider;