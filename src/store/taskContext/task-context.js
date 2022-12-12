import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  totalAmount: "",
  addTask: (item) => {},
});

export default TaskContext;
