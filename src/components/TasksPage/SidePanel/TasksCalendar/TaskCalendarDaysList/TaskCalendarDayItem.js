import { useContext, useState, useEffect } from "react";

import styles from "./TaskCalendarDayItem.module.css";

import TaskContext from "../../../../../store/taskContext/task-context";

const TaskCalendarDayItem = function (props) {
  const taskCtx = useContext(TaskContext);
  const [matchingTasks, setMatchingTasks] = useState([]);

  useEffect(() => {
    if (!props.date) return;

    /* Every task is creating with date hour of 1:00 or 2:00 depends on time of the year,
      so inside filter it's evaluated in kinda imperative way, but it works */
    const tasks = taskCtx.tasks.filter((task) => {
      return task.date
        ? task.date.getTime() === props.date.getTime() + 3600000 ||
            task.date.getTime() === props.date.getTime() + 7200000
        : null;
    });
    setMatchingTasks(tasks);
  }, [taskCtx.tasks, props.date]);

  const dateHandler = (event) => {
    event.preventDefault();
    if (!props.date) return;

    taskCtx.turnOnDisplayingByDate(matchingTasks, props.date);
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
