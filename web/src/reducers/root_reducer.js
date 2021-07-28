import { combineReducers } from "redux";
import session from "./session_reducer";

const RootReducer = combineReducers({
  users: {},
  session,
  errors: {},
});

export default RootReducer;
