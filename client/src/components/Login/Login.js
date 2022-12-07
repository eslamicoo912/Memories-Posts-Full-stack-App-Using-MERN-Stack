import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/users/login",
      formData
    );
    if (response.status === 200) {
      const { data } = response;
      sessionStorage.setItem("user", JSON.stringify(data));
    }
    window.location = "/";
  };

  return (
    <div className="text-center mt-5 pt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          className="form-control w-25 my-4 m-auto"
          placeholder="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="form-control w-25 my-4 m-auto"
          placeholder="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
