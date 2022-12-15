import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  important: [],
  uncategorized: [],
  indefinite: [],
  displayed: [],
  addTask: (task) => {},
  removeTask: (key) => {},
  changeDisplayedList: (type) => {},
});

export default TaskContext;
