import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  important: [],
  uncategorized: [],
  noDate: [],
  displayed: [],
  filteredByDate: [],
  displayingByDate: false,
  addTask: (task) => {},
  removeTask: (key) => {},
  changeDisplayedList: (type) => {},
  turnOnDisplayingByDate: (arr) => {},
  turnOffDisplayingByDate: () => {},
});

export default TaskContext;
