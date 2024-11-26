import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import AboutPage from "../pages/About";
import { SalonFama } from "../pages/SalonFama";
import ResourcesPage from "../pages/Resources";
import Calculator from "../pages/calculator"; 

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/salonfama",
        element: <SalonFama />,
    },
    {
        path: "/resources",
        element: <ResourcesPage />,
    },
    {
        path: "/calculator", 
        element: <Calculator />,
    },
]);
