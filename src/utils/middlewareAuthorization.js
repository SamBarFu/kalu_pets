import { setClient } from "@slices/Auth/Auth.slice"
import { useAuth } from "@hooks/useAuth"

export function checkAuthorization(dispatch) {
  const storedToken = useAuth()
  console.log(storedToken)

  if (storedToken.token) {
    const token = JSON.parse(storedToken.token)

    /* const createdDate = new Date(token.created)
      const created = Math.round(createdDate.getTime() / 1000)
      const ttl = 1209600
      const expiry = created + ttl
  
      if (created > expiry) return false */

    dispatch(setClient({ ...token }))

    return true
  }

  return false
}
