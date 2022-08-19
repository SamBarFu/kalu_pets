/* eslint-disable react/prop-types */
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { checkAuthorization } from "@utils/middlewareAuthorization"

export default function ProtectedRoute({ children }) {
  const client = useSelector((state) => state.auth)
  const location = useLocation()

  const dispatch = useDispatch()

  if (client && client.token) return children

  if (checkAuthorization(dispatch)) return children

  return <Navigate to="/login" replace state={{ from: location }} />
}
