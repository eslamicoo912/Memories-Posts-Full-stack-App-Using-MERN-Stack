import express from "express";
import * as controllers from "../controllers/posts.js";

const routes = express.Router();

routes.get("/", controllers.getPosts);
routes.post("/", controllers.createPost);

export default routes;
