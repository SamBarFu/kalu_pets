import React from "react"
import { Outlet } from "react-router-dom"
import TopNavbar from "@components/TopNavbar"
import Logo from "@img/logo.png"

function MainLayout() {
  const menuTop = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
  ]

  return (
    <div>
      <TopNavbar logo={Logo} navigation={menuTop} />
      <Outlet />
    </div>
  )
}

export default MainLayout
