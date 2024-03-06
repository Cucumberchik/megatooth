import { getAuth } from "firebase"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyARlf6JwB_EjVQJfPkQ0AVcBpnGKykudtc",
    authDomain: "megatooth-563b4.firebaseapp.com",
    projectId: "megatooth-563b4",
    storageBucket: "megatooth-563b4.appspot.com",
    messagingSenderId: "688479379680",
    appId: "1:688479379680:web:329239cda6202a2af17085"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)