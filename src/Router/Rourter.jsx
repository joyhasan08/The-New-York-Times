import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Login/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/reg",
                element: <RegisterPage></RegisterPage>
            }
        ]
    },
]);

export default router;