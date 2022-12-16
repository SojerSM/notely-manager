import { useEffect, useState } from "react";

import styles from "./TaskCalendarDaysList.module.css";

import TaskCalendarDayItem from "./TaskCalendarDayItem";

const TaskCalendarDaysList = function ({ date }) {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const daysArr = new Array(date.daysInMonth).fill({});

    const filledDaysArr = daysArr.map((day, index) => {
      return {
        dayID: index + 1,
        date: new Date(date.year, date.month - 1, index + 1),
      };
    });

    const firstDayOfMonth = filledDaysArr[0].date.getDay();

    const previousMonthDays = new Array(
      firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1
    ).fill(null);

    const finalArr = previousMonthDays.concat(filledDaysArr);

    setDays(finalArr);
  }, [date.month, date.year, date.daysInMonth]);

  return (
    <div className={styles["days-list"]}>
      {days.map((day) => {
        return day ? (
          <TaskCalendarDayItem
            key={day.dayID}
            day={day.dayID}
            date={day.date}
          />
        ) : (
          <TaskCalendarDayItem key={Math.random().toString()} />
        );
      })}
    </div>
  );
};

export default TaskCalendarDaysList;
