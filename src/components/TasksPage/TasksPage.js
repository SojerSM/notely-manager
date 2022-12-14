import styles from "./TasksPage.module.css";

import Page from "../UI/Page";
import SidePanel from "./SidePanel/SidePanel";
import TasksSummary from "./TasksHeader/TasksSummary";
import TasksList from "./TasksList/TasksList";

const TasksPage = function (props) {
  return (
    <Page className={styles.page}>
      <div className={styles.tasks}>
        <TasksSummary />
        <TasksList />
      </div>
      <SidePanel />
    </Page>
  );
};

export default TasksPage;
