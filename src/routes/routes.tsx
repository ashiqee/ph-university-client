import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";

import adminRoutes from "./admin.routes";


const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
    },
    {
        path:'/admin',
        element:<App/>,
        children:adminRoutes,
    },
    // {
    //     path:'/faculty',
    //     element:<App/>,
    //     children:adminPaths,
    // },
    // {
    //     path:'/student',
    //     element:<App/>,
    //     children:adminPaths,
    // },
  
    {
        path:'/register',
        element:<Register/>,
    },
    {
        path:'/login',
        element:<Login/>,
    },
])


export default router;