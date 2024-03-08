import { auth } from "../firebase/firebase"


let inital = {
    user: null
}
const getUser = (status = inital) => {
    return { ...status, user: auth.currentUser }
}
export default getUser