import React, { useEffect, useState } from "react";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./App.css";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div className="app text-center">
      <header className="d-flex justify-content-center align-items-center">
        <h2 className="p-4">
          <span>memo</span>ries
        </h2>
      </header>
      <div className="container m-auto content row mt-5 pt-5">
        <div className="col-5">
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div className="col"></div>
        <div className="col-5">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
};

export default App;
