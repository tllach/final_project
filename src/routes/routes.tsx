import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { About } from "../pages/About";
import { SalonFama } from "../pages/SalonFama";
import { Resources } from "../pages/Resources";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/salonfama",
        element: <SalonFama />,
    },
    {
        path: "/resources",
        element: <Resources />
    }
]);