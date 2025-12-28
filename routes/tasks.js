import express from "express";

const router = express.Router();

let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Learn Express.js", completed: false },
  { id: 3, title: "Learn React", completed: true },
];

// create api
router.post("/create", (req, res) => {
  // new task = database.table.add (id, title, status)
  // return result
});

// get all api
router.get("/all", (req, res) => {
  return res.json(tasks);
});

// get one api
router.get("/:id", (req, res) => {
  const task = tasks.find((task) => task.id === parseInt(req.params.id));
  // !
  //  in express always req.params.is is a string. So it's important to use parseInts
  if (!task) {
    console.log("Task not fount");
    return res.status(404).send("Task Not found");
  }

  return res.json(task);
});

// update api

// delete api

export default router;
