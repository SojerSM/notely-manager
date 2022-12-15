import { useState } from "react";
import TaskCalendarDaysList from "./TaskCalendarDaysList/TaskCalendarDaysList";
import TaskCalendarMonth from "./TaskCalendarMonth";
import TaskCalendarYear from "./TaskCalendarYear";

import styles from "./TasksCalendar.module.css";

const currDate = new Date();

const TasksCalendar = function (props) {
  const [year, setYear] = useState(currDate.getFullYear());
  const [month, setMonth] = useState(currDate.getMonth() + 1);

  const daysInMonth = new Date(year, currDate.getMonth() + 1, 0).getDate();
  const formattedMonth = currDate.toLocaleString("en-US", { month: "long" });

  const yearChangeHandler = (direction) => {
    direction === "backward" && setYear(year - 1);
    direction === "forward" && setYear(year + 1);
  };

  const monthChangeHandler = (direction) => {
    direction === "backward" && setMonth(month - 1);
    direction === "forward" && setMonth(month + 1);
  };

  const date = {
    year,
    month,
    daysInMonth,
  };

  console.log(formattedMonth);

  return (
    <div className={styles["calendar"]}>
      <TaskCalendarYear year={year} onYearChange={yearChangeHandler} />
      <TaskCalendarMonth month={month} onMonthChange={monthChangeHandler} />
      <TaskCalendarDaysList date={date} />
    </div>
  );
};

export default TasksCalendar;
