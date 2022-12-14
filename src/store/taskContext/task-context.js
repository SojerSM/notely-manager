import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  important: [],
  addTask: (task) => {},
});

export default TaskContext;
