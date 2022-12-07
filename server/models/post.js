import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: String,
  img: String,
  title: String,
  date: {
    type: Date,
    default: new Date(),
  },
  description: String,
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
});

const PostModel = mongoose.model("PostModel", postSchema);

export default PostModel;
