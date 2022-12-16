import { useEffect, useState } from "react";

import styles from "./TaskCalendarDaysList.module.css";

import TaskCalendarDayItem from "./TaskCalendarDayItem";

const TaskCalendarDaysList = function (props) {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const daysArr = new Array(props.date.daysInMonth).fill({});

    const filledDaysArr = daysArr.map((day, index) => {
      return {
        dayID: index + 1,
        date: new Date(props.date.year, props.date.month - 1, index + 1),
      };
    });

    setDays(filledDaysArr);
  }, [props.date.month, props.date.year, props.date.daysInMonth]);

  return (
    <div className={styles["days-list"]}>
      {days.map((day) => {
        return (
          <TaskCalendarDayItem
            key={day.dayID}
            day={day.dayID}
            date={day.date}
          />
        );
      })}
    </div>
  );
};

export default TaskCalendarDaysList;
