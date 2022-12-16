import styles from "./TaskCalendarMonth.module.css";
import * as icons from "../../../../assets/icons";

const TaskCalendarMonth = function (props) {
  const monthBackwardHandler = (event) => {
    event.preventDefault();

    if (props.date.year === 2020 && props.date.month === 1) return;
    props.onMonthChange("backward");
  };

  const monthForwardHandler = (event) => {
    event.preventDefault();

    if (props.date.year === 2029 && props.date.month === 12) return;
    props.onMonthChange("forward");
  };

  return (
    <div className={styles["month-wrapper"]}>
      <button onClick={monthBackwardHandler}>
        <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
          {icons.singleArrowLeft}
        </svg>
      </button>
      <div className={styles["month-content"]}>
        <p>{props.date.formattedMonth}</p>
      </div>
      <button onClick={monthForwardHandler}>
        <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
          {icons.singleArrowRight}
        </svg>
      </button>
    </div>
  );
};

export default TaskCalendarMonth;
