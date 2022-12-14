import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  totalAmount: 0,
});

export default TaskContext;
