import { RECEIVE_CREATE_TABLE_FORM } from "../actions/form_actions";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const initialState = {
  open: false,
  type: "",
};

const tablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CREATE_TABLE_FORM:
      return {
        open: !state.open,
        gameType: action.gameType,
      };

    case RECEIVE_USER_LOGOUT:
      return {
        open: false,
        gameType: "",
      };
    default:
      return state;
  }
};

export default tablesReducer;
