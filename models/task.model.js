const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Task title is required"],
    trim: true,
    maxlength: 20,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const taskModel = mongoose.model("Tasks", TaskSchema);

module.exports = taskModel;
