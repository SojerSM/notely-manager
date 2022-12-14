import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  important: [],
  uncategorized: [],
  addTask: (task) => {},
  removeTask: (key) => {},
});

export default TaskContext;
