import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  important: [],
  uncategorized: [],
  displayed: [],
  currDate: "",
  addTask: (task) => {},
  removeTask: (key) => {},
  changeDisplayedList: (type) => {},
});

export default TaskContext;
