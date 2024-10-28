import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { About } from "../pages/About";
import { Stories } from "../pages/Stories";

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
        path: "/stories",
        element: <Stories />,
    }
]);