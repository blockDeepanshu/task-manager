const TaskModel = require("../models/task.model");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await TaskModel.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await TaskModel.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task found with id: ${taskID}`, 404));
  }

  return res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await TaskModel.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task found with id: ${taskID}`, 404));
  }

  return res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await TaskModel.create(req.body);
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await TaskModel.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task found with id: ${taskID}`, 404));
  }

  return res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  createTask,
  deleteTask,
};
