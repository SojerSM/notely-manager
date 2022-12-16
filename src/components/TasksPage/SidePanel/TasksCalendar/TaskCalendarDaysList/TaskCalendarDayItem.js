import { useContext } from "react";

import styles from "./TaskCalendarDayItem.module.css";

import TaskContext from "../../../../../store/taskContext/task-context";

const TaskCalendarDayItem = function (props) {
  const taskCtx = useContext(TaskContext);

  const dateHandler = (event) => {
    event.preventDefault();
    if (!props.date) return;

    /* Plus one hour because every task date is received with default hour 01:00 */

    const matchingDates = taskCtx.tasks.filter((task) => {
      return task.date.getTime() === props.date.getTime() + 3600000;
    });

    console.log(matchingDates);
  };

  return (
    <div className={styles["wrapper"]} onClick={dateHandler}>
      <div className={`${styles["day"]} ${!props.day && styles["unactive"]}`}>
        <h5>{props.day}</h5>
        <div className={`${props.day && styles["contain-panel"]}`}></div>
      </div>
    </div>
  );
};

export default TaskCalendarDayItem;
