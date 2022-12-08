import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";

export default function User() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/users");
    const { data } = response;
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="users">
        {users.map((item, index) => {
          const { _id, username, img, visiblity, postsCount } = item;
          console.log(_id);
          return (
            <div className="user" key={index}>
              <img alt="user" src={img} />
              <h3>{username}</h3>
              <Link to={`/users/${_id}`} className="link-user">
                Read {postsCount} Posts
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
