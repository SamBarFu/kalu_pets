import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    id: null,
    token: null,
  },
  reducers: {
    setClient(state, action) {
      const response = action.payload
      return { ...state, ...response }
    },
    unSetClient() {
      return {
        id: null,
        token: null,
      }
    },
  },
})

export const { setClient, unSetClient } = authSlice.actions

export default authSlice.reducer
