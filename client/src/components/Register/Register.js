import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = () => {};

  const handleSubmit = () => {};

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
          value={formData.username}
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
