import * as api from "../../api";

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const response = await api.login(username, password);
    const action = { type: "LOGIN", payload: response.data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
