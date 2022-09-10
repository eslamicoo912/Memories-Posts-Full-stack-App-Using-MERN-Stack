import React from "react";
import memo from "./images/memo.jpg";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./App.css";

const App = () => {
  return (
    <div className="app container mt-5 text-center">
      <header className="d-flex justify-content-center align-items-center">
        <img src={memo} className="w-25" alt="logo" />
      </header>
      <div className="content row">
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
