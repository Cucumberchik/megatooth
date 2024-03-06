import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase';

const UserDataContext = createContext();
export const useUserData = () => useContext(UserDataContext);
function GetUserDataContext({ children }) {
    const [user, setUser] = useState(false)
    async function handleUserGoogle() {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            //error
        }
    }
    async function handleUserFacebook() {
        const provider = new FacebookAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            //error
        }
    }
    const unsubscribe = async () => onAuthStateChanged(auth, (userData) => setUser(userData));
    useEffect(() => {
        unsubscribe()
    }, [])
    console.log(user);
    let values = {
        user,
        handleUserGoogle,
        handleUserFacebook
    }
    return <UserDataContext.Provider value={values}>{children}</UserDataContext.Provider>
}
export default GetUserDataContext