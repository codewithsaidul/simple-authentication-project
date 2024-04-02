import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Order from "../components/Order";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Order />
           </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router
