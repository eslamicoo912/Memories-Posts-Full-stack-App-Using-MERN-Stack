import React, { useState, useEffect } from "react";
import axios from "axios";
import "./User.css";
import "../User.css";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import "../../Post/Post.css";

export default function User() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const id = window.location.pathname.replace("/users/", "");
    const userResponse = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(userResponse.data);

    const postsResponse = await axios.get(`http://localhost:5000/posts`);
    setPosts(postsResponse.data.filter((p) => p.userId === id));
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="user-page">
      <div className="user">
        <img src={user.img} alt="user" />
        <div className="user-posts">
          {posts.map((item, index) => {
            const { img, title, description, likes, dislikes } = item;
            return (
              <div key={index} className="post">
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
                      <AiFillLike className="like-icon" />
                      <p className="likes">{likes}</p>
                    </div>
                    <div className="dislike">
                      <AiFillDislike className="dislike-icon" />
                      <p className="dis-likes">{dislikes}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
