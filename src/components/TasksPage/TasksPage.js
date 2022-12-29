import { useContext } from "react";

import styles from "./TasksPage.module.css";

import ThemeContext from "../../store/themeContext/theme-context";

import Page from "../UI/Page";
import SidePanel from "./SidePanel/SidePanel";
import TasksSummary from "./TasksHeader/TasksSummary";
import TasksList from "./TasksList/TasksList";

const TasksPage = function (props) {
  const { theme, defaultFontColor } = useContext(ThemeContext);

  return (
    <Page className={styles["page"]} style={{ color: defaultFontColor }}>
      <div className={styles["tasks"]}>
        <TasksSummary theme={theme} fontColor={defaultFontColor} />
        <TasksList theme={theme} />
      </div>
      <SidePanel theme={theme} />
    </Page>
  );
};

export default TasksPage;
