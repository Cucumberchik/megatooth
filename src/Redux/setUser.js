import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { types } from "../typeForRedux/type";
import { useUserData } from "../context/getUserData";
let inital = {
    user: null
}

function setUser(state = inital, action) {
    switch (action.type) {
        case types.login:
            return setUser(action.payload)
        default:
            return state
    }



    async function setUser(obj) {
        let { user } = await createUserWithEmailAndPassword(auth, obj.email, obj.password)
        updateProfile(user, { displayName: obj.data });
    }

}

export default setUser
