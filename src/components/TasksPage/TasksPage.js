import styles from "./TasksPage.module.css";

import Page from "../UI/Page";
import SidePanel from "./SidePanel/SidePanel";
import TasksSummary from "./TasksHeader/TasksSummary";

const TasksPage = function (props) {
  return (
    <Page className={styles.page}>
      <div className={styles.tasks}>
        <TasksSummary />
        <h2>TasksList</h2>
      </div>
      <SidePanel />
    </Page>
  );
};

export default TasksPage;
