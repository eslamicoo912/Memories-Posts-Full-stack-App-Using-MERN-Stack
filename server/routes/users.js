import express from "express";
import * as controllers from "../controllers/users.js";

const routes = express.Router();

routes.get("/", controllers.getAll);
routes.post("/", controllers.createUser);
routes.get("/:username", controllers.getUser);
routes.post("/login", controllers.loginUser);

export default routes;