export const RECEIVE_CREATE_TABLE_FORM = "RECEIVE_CREATE_TABLE_FORM";

export const createTable = (gameType) => ({
  type: RECEIVE_CREATE_TABLE_FORM,
  gameType,
});

export const receiveCreateTableForm = (gameType) => (dispatch) => {
  dispatch(createTable(gameType));
};
