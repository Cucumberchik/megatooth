import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import React, { useState } from 'react';


let inital = {
    user: null
}
const getUser = (status = inital) => {
    var users = null
    onAuthStateChanged(auth, (userData) => {
        users = userData
    });

    return { ...status, user: users }
}
export default getUser