import React, { useEffect, useState } from "react";
import "./Post.css";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import axios from "axios";

export default function Post({ id, img, title, description, likes, dislikes }) {
  const [likesNum, setLikesNum] = useState(likes);
  const [dislikesNum, setDislikesNum] = useState(dislikes);

  const likeClick = async () => {
    await axios.patch(`http://localhost:5000/posts/${id}/like`, {
      img,
      title,
      description,
      dislikes,
    });

    const post = await axios.get(`http://localhost:5000/posts/${id}`);
    const { data } = post;
    setLikesNum(data.likes);
    console.log(post.data);
  };
  const dislikeClick = async () => {
    await axios.patch(`http://localhost:5000/posts/${id}/dislike`, {
      img,
      title,
      description,
      likes,
    });

    const post = await axios.get(`http://localhost:5000/posts/${id}`);
    const { data } = post;
    setDislikesNum(data.dislikes);
  };

  return (
    <div className="post">
      <div className="left-side">
        <img src={img} alt="img" />
        <div className="info">
          <h3 className="title">{title}</h3>
          <hr />
          <h6 className="desc">{description}</h6>
        </div>
      </div>
      <div className="right-side">
        <div className="reactions">
          <div className="like">
            <AiFillLike onClick={likeClick} className="like-icon" />
            <p className="likes">{likesNum}</p>
          </div>
          <div className="dislike">
            <AiFillDislike onClick={dislikeClick} className="dislike-icon" />
            <p className="dis-likes">{dislikesNum}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
