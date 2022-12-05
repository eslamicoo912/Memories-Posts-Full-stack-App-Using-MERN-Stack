import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const foundUser = await UserModel.findOne({ username: username });
    if (foundUser)
      return res.status(401).json({ message: `${username} exists already` });
    bcrypt
      .hash(password, 10)
      .then((hash) => {
        const user = new UserModel({ username: username, password: hash });
        user.save();
        res.json({
          message: `${username} created successfully`,
          data: user,
          token: generateToken(user._id),
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAll = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await UserModel.findOne({ username: username });
    const { visibility } = user;
    if (visibility)
      return res.status(200).json({ message: "success", user: user });
    return res.status(200).json({ message: "fail" });
  } catch (error) {
    console.log(error.message);
  }
};

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET);
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    if (!user)
      return res.status(401).json({ message: `${username} not found` });
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) return res.status(401).json({ message: `password is wrong` });
      return res.status(200).json({
        id: user._id,
        username: user.username,
        token: generateToken(user._id),
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
