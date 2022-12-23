import { useState, useEffect } from "react";
import { getInitialValue } from "../../helpers/helpers";

import TaskContext from "./task-context";

const TaskProvider = function (props) {
  const [tasks, setTasks] = useState(getInitialValue("tasks"));
  const [important, setImportant] = useState([]);
  const [uncategorized, setUncategorized] = useState([]);
  const [noDate, setNoDate] = useState([]);
  const [filteredByDate, setFilteredByDate] = useState([]);
  const [currDisplayedDate, setCurrDisplayedDate] = useState("");
  const [displayed, setDisplayed] = useState("all");
  const [displayingByDate, setDisplayingByDate] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const importantTasks = tasks.filter((task) => {
      return task.priority === true;
    });
    const uncategorizedTasks = tasks.filter((task) => {
      return task.option === "others";
    });
    const noDateTasks = tasks.filter((task) => {
      return task.date === "";
    });
    setImportant(importantTasks);
    setUncategorized(uncategorizedTasks);
    setNoDate(noDateTasks);
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

  const turnOnDisplayingByDate = (arr, date) => {
    setDisplayingByDate(true);
    setFilteredByDate(arr);
    setCurrDisplayedDate(date.toString());
    console.log(filteredByDate);
  };

  const turnOffDisplayingByDate = () => {
    setDisplayingByDate(false);
  };

  const taskContext = {
    tasks,
    important,
    uncategorized,
    noDate,
    displayed,
    filteredByDate,
    displayingByDate,
    currDisplayedDate,
    addTask,
    removeTask,
    changeDisplayedList,
    turnOnDisplayingByDate,
    turnOffDisplayingByDate,
  };

  console.log(tasks);

  return (
    <TaskContext.Provider value={taskContext}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
