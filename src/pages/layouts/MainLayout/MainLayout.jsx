import React from "react"
import { Outlet } from "react-router-dom"
import TopNavbar from "@components/TopNavbar"
import Logo from "@img/logo.png"
import { menuTop } from "@routes"

function MainLayout() {
  return (
    <div>
      <TopNavbar logo={Logo} navigation={menuTop} />
      <Outlet />
    </div>
  )
}

export default MainLayout
