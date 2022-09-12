import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const create = (newPost) => axios.post(url, newPost);
export const update = (newPost, id) => axios.patch(`${url}/${id}`, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/like`);
