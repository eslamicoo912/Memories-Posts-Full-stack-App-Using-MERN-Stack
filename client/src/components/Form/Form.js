import React, { useState, useEffect } from "react";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../redux/actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
  });

  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({ creator: "", title: "", message: "", tags: "" });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <h4>{currentId ? `Editting` : `Creating`} a memory</h4>
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
