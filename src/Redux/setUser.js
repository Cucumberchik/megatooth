import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { types } from "../typeForRedux/type";
let inital = {
    user: null
}

function setUser(state = inital, action) {
    switch (action.type) {
        case types.login:
            return setUser(action.payload)
        case types.logout:
            return handleLogout()
        default:
            return state
    }

    async function handleLogout() {
        try {
            await auth.signOut();
        } catch (error) {
        }
    };

    async function setUser(obj) {
        let { user } = await createUserWithEmailAndPassword(auth, obj.email, obj.password)
        updateProfile(user, { displayName: obj.data });
    }

}

export default setUser
