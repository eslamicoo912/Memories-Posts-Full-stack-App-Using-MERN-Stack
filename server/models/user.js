import mongoose from "mongoose";

const User = mongoose.Schema({
  username: String,
  password: String,
  img: {
    type: String,
    default:
      "https://www.pngitem.com/pimgs/m/233-2331496_personal-personal-photo-icon-png-transparent-png.png",
  },
  visibility: {
    type: Boolean,
    default: true,
  },
  postsCount: {
    type: Number,
    default: 0,
  },
});

const UserModel = mongoose.model("UserModel", User);

export default UserModel;
