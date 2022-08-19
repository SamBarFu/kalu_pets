import * as types from "@constants/actionTypes"

export const getUser = () => {
  return {
    type: types.GET_USER,
  }
}

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    user,
  }
}
