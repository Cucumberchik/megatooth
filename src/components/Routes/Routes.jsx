
import Home from "../pages/Home/Home"
import { Route, Routes } from "react-router-dom";

export default function Routers() {
    let routes = [
        { path: "/", element: <Home /> }
    ]
    return (
        <Routes>
            {routes.map((el, id) => (
                <Route key={id} path={el.path} element={el.element} />
            ))}
        </Routes>
    )
}
