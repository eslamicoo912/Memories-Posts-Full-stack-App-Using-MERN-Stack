import React from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useState, useEffect } from "react";
import { getPosts } from "../../redux/actions/posts";
import { useDispatch } from "react-redux";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div className="container m-auto content row mt-5 pt-5">
      <div className="col-5">
        <Posts setCurrentId={setCurrentId} />
      </div>
      <div className="col"></div>
      <div className="col-5">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
};

export default Home;
