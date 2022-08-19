import axios from "axios"

export function requestGetUser(email) {
  return axios.request({
    method: "get",
    url: "http://localhost:3002/users?email=" + email,
  })
}

export function registerUserService(user) {
  return axios.request({
    method: "post",
    url: "http://localhost:3002/users",
    data: user,
  })
}

export function loginUserService(email, password) {
  return axios.request({
    method: "get",
    url: "http://localhost:3002/users?email=" + email + "?password=" + password,
  })
}
