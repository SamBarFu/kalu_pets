import { call, put, fork, take, cancel, cancelled } from "redux-saga/effects"
import { requestGetUser } from "@services/Auth.service"
import {
  loginUser,
  loginUserSuccess,
  loginUserError,
  loginRedirect,
} from "@slices/Auth/Login.slice"
import { setClient, unSetClient } from "@slices/Auth/Auth.slice"

/**
 * HANDLERS
 */

function* loginFlow(email, password) {
  let token
  try {
    const response = yield call(requestGetUser, email)
    const data = response.data[0]

    if (data) {
      const requestPassword = data.password

      if (requestPassword === password) {
        token = "12345678"
        yield put(setClient({ id: data.id, token }))

        yield put(loginUserSuccess())

        localStorage.setItem("token", JSON.stringify(token))
        yield put(loginRedirect("/profile"))
      } else {
        yield put(loginUserError())
      }
    } else {
      yield put(loginUserError())
    }
  } catch (error) {
    console.log(error)
    yield put(loginUserError())
  } finally {
    if (yield cancelled()) yield put(loginRedirect("/login"))
  }

  return token
}

function* logoutHandler() {
  yield put(unSetClient())

  localStorage.removeItem("token")

  yield put(loginRedirect("/login"))
}

/**
 * SAGAS
 */

export default function* watchLogin() {
  while (true) {
    const login = yield take(loginUser.type)
    const { email, password } = login.payload

    const task = yield fork(loginFlow, email, password)

    const action = yield take([unSetClient.type, loginUserError.type])

    if (action === unSetClient.type) yield cancel(task)

    yield call(logoutHandler)
  }
}
