import styles from "./TaskCalendarDayItem.module.css";

const TaskCalendarDayItem = function (props) {
  return (
    <button className={styles["wrapper"]}>
      <div className={styles["day"]}>
        <h5>10</h5>
      </div>
    </button>
  );
};

export default TaskCalendarDayItem;
