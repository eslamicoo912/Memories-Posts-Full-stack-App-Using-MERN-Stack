import React from "react";
import "./Post.css";
import { FcLike } from "react-icons/fc";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Post = ({ post, setCurrentId }) => {
  const { _id, title, message, creator } = post;

  const likeBtn = () => {};
  const deleteBtn = () => {};

  return (
    <div className="post my-5 card w-75" key={_id}>
      <h3>{title}</h3>
      <h4>{creator}</h4>
      <p>{message}</p>
      <div className="btns d-flex justify-content-between">
        <FcLike onClick={() => likeBtn} className="mx-5 mb-4 like"></FcLike>
        <AiFillEdit
          onClick={() => setCurrentId(_id)}
          className="mx-5 mb-4 edit"
        ></AiFillEdit>
        <AiFillDelete
          onClick={() => deleteBtn}
          className="mx-5 mb-4 delete"
        ></AiFillDelete>
      </div>
    </div>
  );
};

export default Post;
