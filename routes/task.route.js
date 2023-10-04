const {
  getAllTasks,
  updateTask,
  createTask,
  deleteTask,
  getTask,
} = require("../controllers/task.controller");

const taskRouter = require("express").Router();

taskRouter.route("/").get(getAllTasks).post(createTask);

taskRouter.route("/:id").patch(updateTask).delete(deleteTask).get(getTask);

module.exports = taskRouter;
