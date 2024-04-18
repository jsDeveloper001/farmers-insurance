import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Login from "../Pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Map from "../Pages/Map/Map";
import EstateDetails from "../components/EstateDetails/EstateDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/Estate.json')
            },
            {
                path: 'updateProfile',
                element: <ProtectedRoute><UpdateProfile /></ProtectedRoute>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: "location",
                element: <ProtectedRoute><Map /></ProtectedRoute>
            },
            {
                path: '/estate/:estateId',
                element: <ProtectedRoute><EstateDetails /></ProtectedRoute>,
                loader: () => fetch('/Estate.json')
            }
        ]
    }
])
export default router;