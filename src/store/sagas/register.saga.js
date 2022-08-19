import { call, put, takeLatest } from "redux-saga/effects"
import { requestGetUser, registerUserService } from "@services/Auth.service"
import {
  registerUser,
  registerUserSuccess,
  registerUserError,
} from "@slices/Auth/Register.slice"
// import { setClient, unSetClient } from "@slices/Auth/Auth.slice"

/**
 * HANDLERS
 */

function* registerFlow(action) {
  try {
    yield put(registerUserSuccess({}))

    const { email } = action.payload
    const getUserExist = yield call(requestGetUser, email)

    if (getUserExist.data[0]) {
      const response = {
        requesting: false,
        successful: false,
        message: "Ya existe un usuario con ese email",
      }
      yield put(registerUserError({ ...response }))
    } else {
      const getResponse = yield call(registerUserService, action.payload)
      const response = {
        requesting: false,
        successful: true,
        status: getResponse.status,
        message: getResponse.statusText,
        data: getResponse.data,
      }
      yield put(registerUserSuccess({ ...response }))
    }
  } catch (error) {
    yield put(registerUserError({ ...error }))
  }
}

/**
 * SAGAS
 */

export default function* watchRegister() {
  yield takeLatest(registerUser.type, registerFlow)
}
