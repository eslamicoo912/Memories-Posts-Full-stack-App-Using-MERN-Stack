import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import User from "./components/Users/User/User";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/write" element={<Form />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:_id" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
