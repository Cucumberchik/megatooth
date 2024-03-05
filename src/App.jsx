import "./components/GlobalStyle/style.css";
import "./components/GlobalStyle/Media.css";
import Navbar from "./components/pages/Navbar/Navbar";
import Routers from "./components/Routes/Routes";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Routers />
            <Footer />
        </div>
    );
}


