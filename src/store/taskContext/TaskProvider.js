import { useState } from "react";

import TaskContext from "./task-context";

const TaskProvider = function (props) {
  const [tasks, setTasks] = useState([]);

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

  const getImportantTasks = tasks.filter((task) => {
    return task.priority === true;
  });

  const getUncategorizedTasks = tasks.filter((task) => {
    return task.option === "others";
  });

  const taskContext = {
    tasks: tasks,
    addTask: addTask,
    removeTask: removeTask,
    getImportantTasks: getImportantTasks,
    getUncategorizedTasks: getUncategorizedTasks,
  };

  console.log(taskContext.tasks);

  return (
    <TaskContext.Provider value={taskContext}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
