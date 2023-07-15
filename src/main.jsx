import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home.jsx"
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Error from "./pages/error/ErrorPage";
import Registration from "./pages/registration/registration.jsx";
import Menu from "./components/menu.jsx";


const router = createBrowserRouter([

    {
        path : "/",
        element : <Home />,
        errorElement : <Error />
    },
    {
        path : "login",
        element : <Login />
    },
    {
        path : "registration",
        element :  <Registration />
    },
    {
        path : "home",
        element : <Menu />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
