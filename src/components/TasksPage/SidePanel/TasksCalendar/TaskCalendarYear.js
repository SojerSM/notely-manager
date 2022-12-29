import styles from "./TaskCalendarYear.module.css";
import * as icons from "../../../../assets/icons";

const TaskCalendarYear = function (props) {
  const yearBackwardHandler = (event) => {
    event.preventDefault();

    if (props.year === 2020) return;
    props.onYearChange("backward");
  };

  const yearForwardHandler = (event) => {
    event.preventDefault();

    if (props.year === 2029) return;
    props.onYearChange("forward");
  };

  const iconColor = `var(--${props.theme}__UI-icon)`;
  const bcgYear =
    props.theme === "dark"
      ? "var(--dark__gray-light)"
      : "var(--light__gray-medium-light)";

  return (
    <div
      className={styles["year-wrapper"]}
      style={{ backgroundColor: bcgYear }}
    >
      <button onClick={yearBackwardHandler}>
        <svg
          className={styles["svg-icon"]}
          style={{ fill: iconColor }}
          viewBox="0 0 20 20"
        >
          {icons.singleArrowLeft}
        </svg>
      </button>
      <p className={styles["year-content"]}>{props.year}</p>
      <button onClick={yearForwardHandler}>
        <svg
          className={styles["svg-icon"]}
          style={{ fill: iconColor }}
          viewBox="0 0 20 20"
        >
          {icons.singleArrowRight}
        </svg>
      </button>
    </div>
  );
};

export default TaskCalendarYear;
