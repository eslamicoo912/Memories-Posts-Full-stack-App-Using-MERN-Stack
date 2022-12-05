import PostModel from "../models/PostModel.js";
import mongoose from "mongoose";

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostModel(post);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      res.status(404).send("id not found");
    const updatedPost = await PostModel.findByIdAndUpdate(
      _id,
      { ...post, _id },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("id not found");
    await PostModel.findByIdAndRemove(id);
    res.json({ message: "deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("id not found");
    const post = await PostModel.findById(id);
    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error.message);
  }
};
