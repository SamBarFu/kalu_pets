/* import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import reducers from "@store/reducers"
import { watcherSaga } from "@store/sagas/rootSagas"

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(reducers, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store
 */

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import createSagaMiddleware from "Redux-Saga"
import { IndexSaga } from "@store/sagas/rootSagas"
import login from "@slices/Auth/Login.slice"
import register from "@slices/Auth/Register.slice"
import auth from "@slices/Auth/Auth.slice"

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const reducer = combineReducers({
  login,
  register,
  auth,
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(IndexSaga)

export default store
