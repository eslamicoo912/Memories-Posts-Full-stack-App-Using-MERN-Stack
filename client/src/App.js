import React, { useEffect } from "react";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./App.css";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/posts";
import { FaBook } from "react-icons/fa";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);
  return (
    <div className="app container mt-5 text-center">
      <header className="pt-5 d-flex justify-content-center align-items-center">
        <h2>memories</h2>
      </header>
      <div className="content row mt-5 pt-5">
        <div className="col-5">
          <Posts />
        </div>
        <div className="col"></div>
        <div className="col-5">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
