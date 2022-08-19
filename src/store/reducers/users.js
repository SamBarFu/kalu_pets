/* eslint-disable no-case-declarations */
import * as types from "@constants/actionTypes"

const initialState = {
  user: undefined,
  loading: false,
  failed: null,
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUESTED:
      return { ...state, loading: true }

    case types.GET_USERS_SUCCEEDED:
      return { ...state, loading: false, users: action.users }

    case types.GET_USERS_FAILED:
      return { ...state, loading: false, failed: action.error }

    default:
      return state
  }
}

export default users
