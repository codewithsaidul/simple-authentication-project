import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        }
    ]
  },
]);

export default router
