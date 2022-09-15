import express from "express";
import * as controllers from "../controllers/users.js";

const routes = express.Router();

routes.post("/", controllers.createUser);
routes.get("/:username", controllers.getUser);

export default routes;
