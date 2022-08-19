import React from "react"
import { useRoutes } from "react-router-dom"

import ProtectedRoute from "@utils/ProtectedRoute"
import MainLayout from "@pages/layouts/MainLayout"
import Login from "@pages/Auth/Login"
import Register from "@pages/Auth/Register"
import Forgot from "@pages/Auth/Forgot"
import Home from "@pages/Home"
import About from "@pages/AboutPage"
import Profile from "@pages/ProfilePage"
import NotFound from "@pages/404"

export const menuTop = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/profile",
    label: "Profile",
  },
  {
    path: "/login",
    label: "Login",
  },
]

export default function RoutesNav() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/profile", element: <Profile /> },
      ],
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
      path: "/forgot-password",
      element: <Forgot />,
    },
    { path: "*", element: <NotFound /> },
  ])

  return routes
}
