import { combineReducers, createStore } from "redux";
import setUser from "./setUser";
import getUser from "./getUser"
const rootReducer = combineReducers({
    setUser,
    getUser
});
export const storeLogin = createStore(rootReducer)