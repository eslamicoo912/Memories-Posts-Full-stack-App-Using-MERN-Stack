import * as api from "../../api";

export const registerUser = (username, password) => async (dispatch) => {
  try {
    const response = await api.register(username, password);
    const action = { type: "REGISTER", payload: response.data };
    console.log(response.data);
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const response = await api.login(username, password);
    const action = { type: "LOGIN", payload: response.data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
