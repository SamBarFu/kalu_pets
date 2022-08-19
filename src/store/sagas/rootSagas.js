import { fork } from "redux-saga/effects"
import RegisterSaga from "@store/sagas/register.saga"
import LoginSaga from "@store/sagas/login.saga"

export function* IndexSaga() {
  yield fork(RegisterSaga)
  yield fork(LoginSaga)
}
