import { combineReducers } from "redux"
import users from "@store/reducers/users"
import auth from "@store/reducers/auth"

const reducers = combineReducers({
  users,
  auth,
})

export default reducers
