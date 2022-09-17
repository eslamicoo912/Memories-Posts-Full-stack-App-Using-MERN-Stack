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
    localStorage.setItem("id", response.data.id);
    localStorage.setItem("username", response.data.username);
    localStorage.setItem("token", response.data.token);
    alert("Logged in successfully");
    window.location = "/";
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
