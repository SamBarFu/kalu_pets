import { createSlice } from "@reduxjs/toolkit"

const registerSlice = createSlice({
  name: "Register",
  initialState: {
    requesting: false,
    successful: false,
  },
  reducers: {
    registerUser() {
      return {
        requesting: true,
        successful: false,
        message: "loading",
      }
    },
    registerUserSuccess(state, action) {
      const response = action.payload
      return { ...response }
    },
    registerUserError(state, action) {
      console.log(state)
      const response = action.payload
      return { ...response }
    },
  },
})

export const { registerUser, registerUserSuccess, registerUserError } =
  registerSlice.actions

export default registerSlice.reducer
