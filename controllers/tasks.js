const getAllTasks = (req, res) => {
  res.send("Get all tasks.");
};

const createTask = (req, res) => {
  res.send("Create a task");
};

const getTask = (req, res) => {
  res.send("Get a Single Task");
};
const updateTask = (req, res) => {
  res.send("Update Task");
};
const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
