import express from "express";
import * as controllers from "../controllers/users.js";

const routes = express.Router();

routes.get("/", controllers.getAll);
routes.post("/", controllers.createUser);
routes.get("/:id", controllers.getUser);
routes.post("/login", controllers.loginUser);
routes.patch("/:id/post", controllers.updatePostsCount);

export default routes;
