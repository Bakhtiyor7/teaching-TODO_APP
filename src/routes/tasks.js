import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getOneTask,
  updateTask,
} from "../controllers/tasksController.js";

const router = express.Router();

let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Learn Express.js", completed: false },
  { id: 3, title: "Learn React", completed: true },
];

// create api
router.post("/create", createTask);

// get all api
router.get("/all-tasks", getAllTasks);

// get one api
router.get("/:id", getOneTask);

// delete api
router.delete("/:id", deleteTask);
// update api
router.patch("/:id", updateTask);

export default router;
