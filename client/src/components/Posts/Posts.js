import React from "react";
import Post from "./Post/Post";
// import the useSelector to fetch the data from the redux global store
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const postsList = posts.map((post) => {
    return <Post post={post} key={post.id} />;
  });
  return <>{postsList}</>;
};

export default Posts;
