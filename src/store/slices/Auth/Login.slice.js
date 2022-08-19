import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
  name: "Login",
  initialState: {
    requesting: false,
    successful: false,
  },
  reducers: {
    loginUser() {},
    loginUserSuccess() {
      return {
        requesting: false,
        successful: true,
      }
    },
    loginUserError() {
      return {
        requesting: false,
        successful: false,
        message: "Email o contraseña incorrecta",
      }
    },
    loginRedirect(state, action) {
      return { ...state, to: action.payload }
    },
    loginReset() {
      return { requesting: false, successful: false }
    },
  },
})

export const {
  loginUser,
  loginUserSuccess,
  loginUserError,
  loginRedirect,
  loginReset,
} = loginSlice.actions

export default loginSlice.reducer
