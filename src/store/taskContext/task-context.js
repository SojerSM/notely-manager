import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  important: [],
  uncategorized: [],
  noDate: [],
  displayed: [],
  filteredByDate: [],
  displayingByDate: false,
  currDisplayedDate: "",
  addTask: (task) => {},
  removeTask: (key) => {},
  changeDisplayedList: (type) => {},
  turnOnDisplayingByDate: (arr) => {},
  turnOffDisplayingByDate: () => {},
  toggleDone: (key) => {},
});

export default TaskContext;
