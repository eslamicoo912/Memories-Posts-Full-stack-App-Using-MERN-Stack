import express from "express";
import * as controllers from "../controllers/posts.js";

const routes = express.Router();

routes.get("/", controllers.getPosts);
routes.post("/", controllers.createPost);
routes.patch("/:id", controllers.updatePost);
routes.delete("/:id", controllers.deletePost);
routes.patch("/:id/like", controllers.likePost);

export default routes;
