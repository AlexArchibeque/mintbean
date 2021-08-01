import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import tableForms from "./forms_reducer";

const RootReducer = combineReducers({
  users: {},
  tableForms,
  session,
  errors,
});

export default RootReducer;
