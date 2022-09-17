import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/users";

const Register = () => {
  const dispatch = useDispatch();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData.username, formData.password));
  };

  return (
    <div className="text-center mt-5 pt-5">
      <h2>Create New Account</h2>
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

export default Register;
