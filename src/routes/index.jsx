import React from "react"
import { useRoutes } from "react-router-dom"

import MainLayout from "@pages/layouts/MainLayout"
import Home from "@pages/Home"
import About from "@pages/About"
import NotFound from "@pages/404"

export default function RoutesNav() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home></Home> },
        { path: "/about", element: <About></About> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ])

  return routes
}
