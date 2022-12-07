import express from "express";
import * as controllers from "../controllers/posts.js";

const routes = express.Router();

routes.get("/", controllers.getPosts);
routes.get("/:id", controllers.getPost);
routes.post("/", controllers.createPost);
routes.patch("/:id", controllers.updatePost);
routes.delete("/:id", controllers.deletePost);
routes.patch("/:id/like", controllers.likePost);
routes.patch("/:id/dislike", controllers.dislikePost);

export default routes;
