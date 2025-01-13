import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import ServicePage from "./components/ServicePage/ServicePage";
import Post from "./components/Post/Post";
import NotFound from "./utils/NotFound/NotFound";
import Profile from './components/Profile/Profile'
import { UserProvider } from "./context/UserContext";
import ApplicationPage from "./components/ApplicationPage/ApplicationPage";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
// import {
//   ProtectedRoute,
//   SuperAdminRoute,
// } from "./ProtectedRoutes/ProtectedRoutes.js";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:category/:name",
        element: <ServicePage/>,
      },
      {
        path: "/services/:category/:name/apply",
        element: <ApplicationPage/>,
      },
      {
        path: "/digital-seva",
        element: <RegistrationPage/>,
      },
      {
        path: "/services/add",
        element: <Post/>,
      },
      {
        path: "/profile",
        element:(
          // <ProtectedRoute>
            <Profile/>
          // </ProtectedRoute>
        )
      },
      {
        path: "/profile/update",
        element: <UpdateProfile/>,
      },
      {
        path:"*",
        element: <NotFound/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path:"*",
    element: <NotFound/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
   </UserProvider>
);
