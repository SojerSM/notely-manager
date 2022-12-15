import styles from "./TaskCalendarMonth.module.css";
import * as icons from "../../../../assets/icons";

const TaskCalendarMonth = function (props) {
  const monthBackwardHandler = (event) => {
    event.preventDefault();
    props.onMonthChange("backward");
  };

  const monthForwardHandler = (event) => {
    event.preventDefault();
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
        <p>{props.formattedMonth}</p>
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
