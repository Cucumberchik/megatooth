import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { types } from "../typeForRedux/type";
let inital = {
    user: null
}

function setUser(state = inital, action) {
    onAuthStateChanged(auth, (userData) => {
        return { ...state, user: userData };
    });

    switch (action.type) {
        case types.login:
            return setUser(action.payload)
        default:
            return state
    }


    async function setUser(obj) {
        await createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

}

export default setUser
