import express from "express";

const app = express();
const port = process.env.PORT || 3000;
import taskRouter from "./routes/tasks.js";

// middleware for parsing json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
