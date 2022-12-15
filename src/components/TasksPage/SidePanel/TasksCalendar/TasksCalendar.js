import { useState } from "react";
import TaskCalendarYear from "./TaskCalendarYear";

import styles from "./TasksCalendar.module.css";

const currDate = new Date();

const TasksCalendar = function (props) {
  const [year, setYear] = useState(currDate.getFullYear());

  console.log(year, setYear);

  return (
    <div className={styles["calendar"]}>
      <TaskCalendarYear year={year} />
      <div>Month</div>
      <div>Days</div>
    </div>
  );
};

export default TasksCalendar;
