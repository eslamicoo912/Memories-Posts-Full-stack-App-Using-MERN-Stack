import React from "react";

const Post = ({ post }) => {
  const { id, title, message, creator } = post;
  return (
    <div className="post" key={id}>
      <h1>{title}</h1>
      <h3>{creator}</h3>
      <p>{message}</p>
    </div>
  );
};

export default Post;
