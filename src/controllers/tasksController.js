import pool from "../../util/db.js";

/*
 * TODO:
 *  - check if correct response code is used in error handling
 *  - authentication
 *  */

export const createTask = async (req, res) => {
  try {
    const title = req.body.title;
    if (!title) {
      return res.status(400).send({ error: "Title should not be empty" });
    }

    const completed = false;
    const query = `INSERT INTO tasks (title, completed) VALUES (?, ?)`;
    const [result] = await pool.query(query, [title, completed]);
    // return result
    res.status(201).json({
      status: "success",
      id: result.insertId,
      title,
      completed,
    });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ "[createTaskController] Error on createTask": error });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const query = `SELECT * FROM tasks`;
    const [result] = await pool.query(query);

    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "Error on getAllTasks" });
  }
};

export const getOneTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const query = `SELECT * FROM tasks WHERE id = ?`;
    const [result] = await pool.query(query, [id]);

    res.status(200).json({
      status: "success",
      result: result,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "Error on getOneTask" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const query = `DELETE FROM tasks WHERE id = ?`;
    const [result] = await pool.query(query, [id]);

    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "Error on deleteTask" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const completed = req.body.completed;
    const findQuery = `SELECT * FROM tasks WHERE id = ?`;
    const [taskExists] = await pool.query(findQuery, [id]);

    if (!taskExists) {
      return res.status(404).send({ error: "Task not found" });
    }

    const updateQuery = `UPDATE tasks SET completed = ? WHERE id = ?`;
    const [result] = await pool.query(updateQuery, [completed, id]);

    return res.status(200).json({
      status: "success",
      id: result.id,
      result: result,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "Error on updateTask" });
  }
};
