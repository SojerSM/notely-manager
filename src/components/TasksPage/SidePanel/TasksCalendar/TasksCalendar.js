import { useState } from "react";
import TaskCalendarMonth from "./TaskCalendarMonth";
import TaskCalendarYear from "./TaskCalendarYear";

import styles from "./TasksCalendar.module.css";

const currDate = new Date();
const currMonth = currDate.toLocaleString("en-US", { month: "long" });

const TasksCalendar = function (props) {
  const [year, setYear] = useState(currDate.getFullYear());
  const [month, setMonth] = useState(currMonth);

  console.log(year, setYear, setMonth);

  return (
    <div className={styles["calendar"]}>
      <TaskCalendarYear year={year} />
      <TaskCalendarMonth month={month} />
      <div>Days</div>
    </div>
  );
};

export default TasksCalendar;
