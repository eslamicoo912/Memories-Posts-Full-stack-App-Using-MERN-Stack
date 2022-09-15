import UserModel from "../models/user.js";
import bcrypt from "bcrypt";

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
        res.json({ message: `${username} created successfully`, data: user });
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await UserModel.findOne({ username: username });
    res.json({ user });
  } catch (error) {
    console.log(error.message);
  }
};
