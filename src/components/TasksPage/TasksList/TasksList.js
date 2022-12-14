import styles from "./TasksList.module.css";

import TaskItem from "./TaskItem/TaskItem";

const TasksList = function (props) {
  return (
    <div className={styles["list"]}>
      <h3>All</h3>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
};

export default TasksList;
