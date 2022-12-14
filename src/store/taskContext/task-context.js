import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  addTask: (task) => {},
});

export default TaskContext;
