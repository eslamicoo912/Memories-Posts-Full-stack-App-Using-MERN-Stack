import React from "react";
import memo from "./images/memo.jpg";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div className="app container mt-5 text-center">
      <header>
        <h1>Memories</h1>
        <img src={memo} className="w-50" alt="logo" />
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
