import mongoose from "mongoose";

const User = mongoose.Schema({
  username: String,
  password: String,
});

const UserModel = mongoose.model("UserModel", User);

export default UserModel;
