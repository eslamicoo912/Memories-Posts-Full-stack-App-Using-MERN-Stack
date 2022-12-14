import * as api from "../../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

// action creators
export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    const action = { type: FETCH_ALL, payload: response.data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const response = await api.create(post);
    const action = { type: CREATE, payload: response.data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const response = await api.update(post, id);
    const action = { type: UPDATE, payload: response.data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    const action = { type: DELETE, payload: id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const response = await api.likePost(id);
    const action = { type: LIKE, payload: response.data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
