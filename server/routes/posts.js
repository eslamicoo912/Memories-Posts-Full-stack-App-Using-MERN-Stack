import express from "express";
import * as controllers from "../controllers/posts.js";

const routes = express.Router();

routes.get("/", controllers.getPosts);
routes.post("/", controllers.createPost);
routes.patch("/:id", controllers.updatePost);

export default routes;
