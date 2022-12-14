import { useContext, Fragment } from "react";

import styles from "./TasksList.module.css";

import TaskContext from "../../../store/taskContext/task-context";

import TaskItem from "./TaskItem/TaskItem";

const TasksList = function (props) {
  const { tasks } = useContext(TaskContext);

  console.log(tasks);

  return (
    <Fragment>
      <h3 className={styles["filter"]}>All</h3>
      <div className={styles["list"]}>
        {tasks.length > 0 &&
          tasks.map((task) => {
            return (
              <TaskItem
                key={task.key}
                date={task.date}
                content={task.content}
                option={task.option}
                priority={task.priority}
              />
            );
          })}
      </div>
    </Fragment>
  );
};

export default TasksList;
