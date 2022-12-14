import { useContext } from "react";

import styles from "./TasksList.module.css";

import TaskContext from "../../../store/taskContext/task-context";

import TaskItem from "./TaskItem/TaskItem";

const TasksList = function (props) {
  const { tasks } = useContext(TaskContext);

  console.log(tasks);

  return (
    <div className={styles["list"]}>
      <h3>All</h3>
      {tasks.length > 0 &&
        tasks.map((task) => {
          return <TaskItem key={task.key} />;
        })}
    </div>
  );
};

export default TasksList;
