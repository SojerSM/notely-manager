import styles from "./TaskCalendarMonth.module.css";
import * as icons from "../../../../assets/icons";

const TaskCalendarMonth = function (props) {
  return (
    <div className={styles["month-wrapper"]}>
      <button>
        <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
          {icons.singleArrowLeft}
        </svg>
      </button>
      <p className={styles["month-content"]}>{props.month}</p>
      <button>
        <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
          {icons.singleArrowRight}
        </svg>
      </button>
    </div>
  );
};

export default TaskCalendarMonth;
