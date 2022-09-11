import * as api from "../../api";

// action creators
export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    const action = { type: "FETCH_ALL", payload: response.data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const response = await api.create(post);
    const action = { type: "CREATE", payload: response.data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};