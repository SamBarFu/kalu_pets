/* eslint-disable no-case-declarations */
import * as types from "@constants/ActionTypes"

const initialState = {
  user: undefined,
  token: undefined,
}

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      const { user } = action
      return { ...state, user }

    default:
      return state
  }
}

export default Auth
