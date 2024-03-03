import "./components/GlobalStyle/style.css";
import "./components/GlobalStyle/Media.css";
import Navbar from "./components/pages/Navbar/Navbar";
import Routers from "./components/Routes/Routes";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routers />
        </div>
    );
}

export default App;
