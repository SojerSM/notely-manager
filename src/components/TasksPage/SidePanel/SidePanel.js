import styles from "./SidePanel.module.css";

import Panel from "../../UI/Panel";
import TasksCalendar from "./TasksCalendar/TasksCalendar";

const SidePanel = function (props) {
  return (
    <Panel>
      <h4 className={styles["side-page-title"]}>Calendar</h4>
      <TasksCalendar />
    </Panel>
  );
};

export default SidePanel;
