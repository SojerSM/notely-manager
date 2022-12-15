import styles from "./SidePanel.module.css";

import TasksCalendar from "./TasksCalendar/TasksCalendar";

const SidePanel = function (props) {
  return (
    <div className={styles["panel"]}>
      <h4 className={styles["side-page-title"]}>Calendar</h4>
      <TasksCalendar />
    </div>
  );
};

export default SidePanel;
