const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const taskRoutes = require("./routes/task.route");

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/tasks", taskRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
