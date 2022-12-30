import { useContext, useState, useEffect } from "react";

import styles from "./TaskCalendarDayItem.module.css";

import TaskContext from "../../../../../store/taskContext/task-context";

const TaskCalendarDayItem = function (props) {
  const taskCtx = useContext(TaskContext);
  const [matchingTasks, setMatchingTasks] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const dayClass = props.theme === "dark" ? "day-dark" : "day-light";
  const focusedColor =
    props.theme === "dark"
      ? "var(--dark__gray-light)"
      : "var(--light__gray-medium-light)";
  const unactiveClass =
    props.theme === "dark" ? "unactive-dark" : "unactive-light";
  const activeClass =
    props.theme === "dark" ? "day-active-dark" : "day-active-light";
  const containPanelColor =
    props.theme === "dark"
      ? "var(--dark__gray-forms)"
      : "var(--light__gray-medium-light)";
  const containActive =
    props.theme === "dark" ? "contain-active-dark" : "contain-active-light";

  useEffect(() => {
    if (!props.date) return;

    /* Every task is creating with date hour of 1:00 or 2:00 depends on time of the year,
      so inside filter it's evaluated in kinda imperative way, but it works */
    const tasks = taskCtx.tasks.filter((task) => {
      return task.date
        ? new Date(task.date).getTime() === props.date.getTime() + 3600000 ||
            new Date(task.date).getTime() === props.date.getTime() + 7200000
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
    matchingTasks.length > 0 && styles[containActive]
  }`;

  const dayFilledClass = `${matchingTasks.length > 0 && styles[activeClass]}`;

  return (
    <div className={styles["wrapper"]} onClick={dateHandler}>
      <div
        className={`${styles[dayClass]} ${dayFilledClass} ${
          !props.day && styles[unactiveClass]
        }`}
        onMouseOver={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        style={{
          backgroundColor: isFocused ? focusedColor : "",
        }}
      >
        <h5>{props.day}</h5>
        {props.day && (
          <div
            className={`${styles["contain-panel"]} ${panelFilledClass}`}
            style={{ backgroundColor: containPanelColor }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default TaskCalendarDayItem;
