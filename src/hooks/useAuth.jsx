/* eslint-disable react/prop-types */
import { React, createContext, useContext, useMemo } from "react"
import { useLocalStorage } from "@hooks/useLocalStorage"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token] = useLocalStorage("token")

  const value = useMemo(() => ({ token }), [token])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
