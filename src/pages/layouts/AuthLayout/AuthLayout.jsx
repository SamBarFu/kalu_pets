import React from "react"
import PropTypes from "prop-types"
import { AuthWrappper } from "./AuthLayout.styled"
import logoImg from "@img/login4.png"
import logo from "@img/logoKalu&Pets.png"
import logoKP from "@img/favicon.png"
import { Navigate } from "react-router-dom"
import { useAuth } from "@hooks/useAuth"

export default function AuthLayout({ children, title, subtitle }) {
  const { token } = useAuth()

  if (token) return <Navigate to="/" replace />

  return (
    <AuthWrappper>
      <div className="container-auth">
        <img className="logo" src={logo} />
        <img className="image-logo" src={logoImg} />
        <footer>&copy; SamSoft 2022, All rights reserved.</footer>
      </div>
      <div className="container-form">
        <div className="header-form">
          <img src={logoKP} />
          {title ? <h1>{title}</h1> : ""}
          {subtitle ? <p>{subtitle}</p> : ""}
        </div>
        {children}
      </div>
    </AuthWrappper>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
}
