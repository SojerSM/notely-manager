import styles from "./TaskCalendarYear.module.css";
import * as icons from "../../../../assets/icons";

const TaskCalendarYear = function (props) {
  return (
    <div className={styles["year-wrapper"]}>
      <button>
        <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
          {icons.singleArrowLeft}
        </svg>
      </button>
      <p className={styles["year-content"]}>{props.year}</p>
      <button>
        <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
          {icons.singleArrowRight}
        </svg>
      </button>
    </div>
  );
};

export default TaskCalendarYear;
