import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import Post from "../Post/Post";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const user = sessionStorage.getItem("user");

  const getPosts = async () => {
    const response = await axios.get("http://localhost:5000/posts");
    const { data } = response;
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (!user) {
    return <h1 className="mt-5 pt-5">Login To See Blogs</h1>;
  }

  return (
    <div className="home">
      <header className="d-flex justify-content-between align-items-center p-3">
        <div className="title">
          <h1>GoSocial</h1>
          <p>
            <BsFillPencilFill className="icon" /> . Write Your Blog Easily
          </p>
        </div>
      </header>
      <div className="posts-list">
        {posts.map((item, index) => {
          const { _id, img, title, description, likes, dislikes } = item;

          return (
            <Post
              key={index}
              id={_id}
              img={img}
              title={title}
              description={description}
              likes={likes}
              dislikes={dislikes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
