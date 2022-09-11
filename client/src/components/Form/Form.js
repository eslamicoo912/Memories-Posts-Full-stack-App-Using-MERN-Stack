import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
  });

  const handleSubmit = () => {};
  const clear = () => {};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Creating a memory</h4>
        <input
          name="creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          name="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          name="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postMessage, message: e.target.value })
          }
        />
        <input
          name="tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button className="btn btn-danger" onClick={clear}>
          Clear
        </button>
      </form>
    </>
  );
};

export default Form;
