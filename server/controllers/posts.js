import PostModel from "../models/post.js";
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

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostModel.findOne({ _id: id });
    res.json(post);
  } catch (error) {
    console.log(error);
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
    const { id } = req.params;

    await PostModel.deleteOne({ _id: id });
    res.json({ message: "deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findOne({ _id: id });
    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      { ...req.body, likes: post.likes + 1 },
      {
        new: true,
      }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error.message);
  }
};

export const dislikePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findOne({ _id: id });
    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      { ...req.body, dislikes: post.dislikes + 1 },
      {
        new: true,
      }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error.message);
  }
};
