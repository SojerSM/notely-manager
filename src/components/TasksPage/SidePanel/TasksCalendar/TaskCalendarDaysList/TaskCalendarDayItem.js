import { useContext, useState, useEffect } from "react";

import styles from "./TaskCalendarDayItem.module.css";

import TaskContext from "../../../../../store/taskContext/task-context";

const TaskCalendarDayItem = function (props) {
  const taskCtx = useContext(TaskContext);
  const [matchingTasks, setMatchingTasks] = useState([]);

  useEffect(() => {
    if (!props.date) return;

    // Plus one hour because every task date is received with default hour 01:00
    const tasks = taskCtx.tasks.filter((task) => {
      return task.date
        ? task.date.getTime() === props.date.getTime() + 3600000
        : null;
    });
    setMatchingTasks(tasks);
  }, [taskCtx.tasks, props.date]);

  const dateHandler = (event) => {
    event.preventDefault();
    if (!props.date) return;

    taskCtx.turnOnDisplayingByDate(matchingTasks);
  };

  const panelFilledClass = `${
    matchingTasks.length > 0 && styles["contain-active"]
  }`;

  const dayFilledClass = `${matchingTasks.length > 0 && styles["day-active"]}`;

  return (
    <div className={styles["wrapper"]} onClick={dateHandler}>
      <div
        className={`${styles["day"]} ${dayFilledClass} ${
          !props.day && styles["unactive"]
        }`}
      >
        <h5>{props.day}</h5>
        {props.day && (
          <div
            className={`${styles["contain-panel"]} ${panelFilledClass}`}
          ></div>
        )}
      </div>
    </div>
  );
};

export default TaskCalendarDayItem;
