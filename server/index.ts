import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app: Application = express();
const port = 5000;

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello , server!");
});

app.listen(port, () => {
  console.log(`listening for port ${port}`);
});
