import { useState, useEffect } from "react";
import TaskCalendarDaysList from "./TaskCalendarDaysList/TaskCalendarDaysList";
import TaskCalendarMonth from "./TaskCalendarMonth";
import TaskCalendarYear from "./TaskCalendarYear";

import styles from "./TasksCalendar.module.css";

const currDate = new Date();

const TasksCalendar = function (props) {
  const [year, setYear] = useState(currDate.getFullYear());
  const [month, setMonth] = useState(currDate.getMonth() + 1);

  const daysInMonth = new Date(year, month, 0).getDate();
  const formattedMonth = new Date(year, month - 1).toLocaleString("en-US", {
    month: "long",
  });

  useEffect(() => {
    if (month < 1) {
      setMonth(12);
      setYear(year - 1);
    }
    if (month > 12) {
      setMonth(1);
      setYear(year + 1);
    }
  }, [month, year]);

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
    formattedMonth,
    daysInMonth,
  };

  return (
    <div className={styles["calendar"]}>
      <TaskCalendarYear
        year={year}
        onYearChange={yearChangeHandler}
        theme={props.theme}
      />
      <TaskCalendarMonth
        date={date}
        onMonthChange={monthChangeHandler}
        theme={props.theme}
      />
      <TaskCalendarDaysList date={date} theme={props.theme} />
    </div>
  );
};

export default TasksCalendar;
