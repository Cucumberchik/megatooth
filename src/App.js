import "./components/GlobalStyle/style.css";
import "./components/GlobalStyle/Media.css";
import Navbar from "./components/pages/Navbar/Navbar";
import Routers from "./components/Routes/Routes";
import Footer from "./Footer/Footer";
import Authorization from "./components/modal_window/signin";
import { useState } from "react";
import Login from "./components/modal_window/login";



export default function App() {
    let [signin, setSign] = useState(false)
    let [login, setLogin] = useState(false)
    return (
        <div className="App">
            <Navbar />
            <Routers />
            <Footer setSign={setSign} />
            <Authorization setLogin={setLogin} signin={signin} setSign={setSign} />
            <Login login={login} setLogin={setLogin} />
        </div>
    );
}


