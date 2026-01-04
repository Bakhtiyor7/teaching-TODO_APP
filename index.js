import dotenv from "dotenv";
import express from "express";
import mysql from "mysql2/promise";
dotenv.config();

const app = express();
const port = process.env.PORT;

import taskRouter from "./src/routes/tasks.js";
// middleware for parsing json
app.use(express.json());

app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
