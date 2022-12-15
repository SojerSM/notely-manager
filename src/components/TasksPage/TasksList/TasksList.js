import { useContext, Fragment } from "react";

import styles from "./TasksList.module.css";

import TaskContext from "../../../store/taskContext/task-context";

import TaskItem from "./TaskItem/TaskItem";

const TasksList = function (props) {
  const tasksCtx = useContext(TaskContext);

  let currList;

  if (tasksCtx.displayed === "all") currList = tasksCtx.tasks;
  if (tasksCtx.displayed === "important") currList = tasksCtx.important;
  if (tasksCtx.displayed === "uncategorized") currList = tasksCtx.uncategorized;
  if (tasksCtx.displayed === "indefinite") currList = tasksCtx.indefinite;

  return (
    <Fragment>
      <h3 className={styles["filter"]}>All</h3>
      <div className={styles["list"]}>
        {currList.length > 0 ? (
          currList.map((task) => {
            return (
              <TaskItem
                key={task.key}
                id={task.key}
                date={task.date}
                content={task.content}
                option={task.option}
                priority={task.priority}
              />
            );
          })
        ) : (
          <h3 className={styles["msg-on-empty"]}>No tasks found.</h3>
        )}
      </div>
    </Fragment>
  );
};

export default TasksList;
