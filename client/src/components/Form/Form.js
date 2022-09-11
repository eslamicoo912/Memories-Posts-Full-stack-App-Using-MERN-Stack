import React, { useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};
  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <h4>Creating a memory</h4>
        <input
          name="creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          placeholder="creator"
        />
        <input
          name="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          placeholder="title"
        />
        <input
          name="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          placeholder="message"
        />
        <input
          name="tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          placeholder="tags"
        />
        <button className="submit" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button className="clear" onClick={clear}>
          Clear
        </button>
      </form>
    </>
  );
};

export default Form;
