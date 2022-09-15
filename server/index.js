import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postsRoute from "./routes/posts.js";
import usersRoute from "./routes/users.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routes
app.use("/posts", postsRoute);
app.use("/users", usersRoute);

// main endpoint test
app.get("/", (req, res) => {
  res.send("Hello , server!");
});

// database connection
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => {
      console.log(`listening for port ${port}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });
