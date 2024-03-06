// import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
// import React, { createContext, useContext, useState } from 'react'
// import { auth } from '../firebase'

// const authContext = createContext()
// export const useAuth = () => useContext(authContext)
export const num = 1
// export default function AuthContext({ children }) {
//     let [user, setUser] = useState(null)
//     async function checkUser() {
//         return onAuthStateChanged(auth, (username) => setUser(username))
//     }
//     async function signUp(name, surname, email, password) {
//         await createUserWithEmailAndPassword(auth, email, password).then(res => {
//             let person = res.user
//         })
//     }
//     let values = { signUp, user, checkUser }
//     return <authContext.Provider value={values}>{children}</authContext.Provider>
// }
