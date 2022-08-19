import { useState } from "react"

export const useLocalStorage = (keyName, defaultValue = null) => {
  const [storedValue] = useState(() => {
    try {
      const value = localStorage.getItem(keyName)

      if (value) {
        return JSON.parse(value)
      } else {
        localStorage.setItem(keyName, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (err) {
      return defaultValue
    }
  })

  return [storedValue]
}
