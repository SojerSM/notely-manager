import { Fragment } from "react";

import styles from "./TaskDate.module.css";

const TaskDate = function (props) {
  let year, month, day;

  if (props.date) {
    year = new Date(props.date).getFullYear();
    month = new Date(props.date).toLocaleString("en-US", { month: "long" });
    day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
  }

  return (
    <Fragment>
      {props.date ? (
        <div className={`${styles["date"]} ${props.done && styles["done"]}`}>
          <span>{+day.charAt(0) === 0 ? day.slice(1) : day}</span>
          <span>{month.slice(0, 3)}</span>
          <span>{year}</span>
        </div>
      ) : (
        <div className={`${styles["date"]} ${styles["no-date"]}`}>
          <span>No date</span>
        </div>
      )}
    </Fragment>
  );
};

export default TaskDate;
