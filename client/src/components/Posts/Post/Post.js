import React from "react";
import "./Post.css";
import { FcLike } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";

const Post = ({ post }) => {
  const { id, title, message, creator } = post;

  const likeBtn = () => {};
  const deleteBtn = () => {};

  return (
    <div className="post card w-75" key={id}>
      <h3>{title}</h3>
      <h4>{creator}</h4>
      <p>{message}</p>
      <div className="btns d-flex justify-content-between">
        <FcLike onClick={() => likeBtn} className="mx-5 mb-4 like"></FcLike>
        <AiFillDelete
          onClick={() => deleteBtn}
          className="mx-5 mb-4 delete"
        ></AiFillDelete>
      </div>
    </div>
  );
};

export default Post;
