import { RECEIVE_CREATE_TABLE_FORM } from "../actions/form_actions";

const initialState = {
  open: false,
  type: "",
};

const tablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CREATE_TABLE_FORM:
      console.log(action);
      return {
        open: !state.open,
        gameType: action.gameType,
      };
    default:
      return state;
  }
};

export default tablesReducer;
