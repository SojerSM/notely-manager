import { useState, useEffect } from "react";

import TaskContext from "./task-context";

const TaskProvider = function (props) {
  const [tasks, setTasks] = useState([]);
  const [important, setImportant] = useState([]);
  const [uncategorized, setUncategorized] = useState([]);
  const [displayed, setDisplayed] = useState("all");

  useEffect(() => {
    const importantTasks = tasks.filter((task) => {
      return task.priority === true;
    });
    const uncategorizedTasks = tasks.filter((task) => {
      return task.option === "others";
    });
    setImportant(importantTasks);
    setUncategorized(uncategorizedTasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevState) => [
      ...prevState,
      {
        key: task.key,
        content: task.content,
        date: task.date,
        option: task.option,
        priority: task.priority,
      },
    ]);
  };

  const removeTask = (key) => {
    const newArr = tasks.filter((task) => {
      return task.key !== key;
    });
    setTasks(newArr);
  };

  const changeDisplayedList = (type) => {
    setDisplayed(type);
  };

  const taskContext = {
    tasks: tasks,
    important: important,
    uncategorized: uncategorized,
    displayed: displayed,
    addTask: addTask,
    removeTask: removeTask,
    changeDisplayedList: changeDisplayedList,
  };

  console.log("Displayed ", displayed);

  return (
    <TaskContext.Provider value={taskContext}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
