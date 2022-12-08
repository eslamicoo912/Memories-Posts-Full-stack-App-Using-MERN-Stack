import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [postData, setPostData] = useState({
    userId: sessionStorage.getItem("user"),
    img: "",
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/posts", postData);
    await axios.patch(
      `http://localhost:5000/users/${sessionStorage.getItem("user")}/post`
    );
    window.location = "/";
  };
  const clear = () => {
    setPostData({ img: "", title: "", description: "" });
  };
  return (
    <div className="write">
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <input
          name="img"
          value={postData.img}
          onChange={(e) => setPostData({ ...postData, img: e.target.value })}
          placeholder="img"
        />
        <input
          name="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          placeholder="title"
        />
        <textarea
          name="description"
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
          placeholder="description"
        ></textarea>

        <div className="btns">
          <button className="submit" type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button className="clear" onClick={clear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
