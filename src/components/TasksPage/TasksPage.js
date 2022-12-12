import styles from "./TasksPage.module.css";

import TaskProvider from "../../store/taskContext/TaskProvider";

import Page from "../UI/Page";
import SidePanel from "./SidePanel/SidePanel";
import TasksSummary from "./TasksHeader/TasksSummary";

const TasksPage = function (props) {
  return (
    <TaskProvider>
      <Page className={styles.page}>
        <div className={styles.tasks}>
          <TasksSummary />
          <h2>TasksList</h2>
        </div>
        <SidePanel />
      </Page>
    </TaskProvider>
  );
};

export default TasksPage;
