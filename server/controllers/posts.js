import PostMessage from "../models/postMessage.js";

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
  }
};

export const getOne = async (req, res) => {
  try {
    const title = req.params.title;
    const post = await PostMessage.find({ title: `${title}` });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};
