import { useContext, Fragment } from "react";

import styles from "./TasksList.module.css";

import TaskContext from "../../../store/taskContext/task-context";

import TaskItem from "./TaskItem/TaskItem";

const TasksList = function (props) {
  const tasksCtx = useContext(TaskContext);

  let currList, filterLabel;

  if (tasksCtx.displayingByDate) {
    const currDate = new Date(tasksCtx.currDisplayedDate);
    const year = currDate.getFullYear();
    const month = currDate.toLocaleDateString("en-US", { month: "long" });
    const day = currDate.toLocaleString("en-US", { day: "2-digit" });
    filterLabel = `${
      +day.charAt(0) === 0 ? day.slice(1) : day
    } ${month} ${year}`;

    currList = tasksCtx.filteredByDate;
  }

  if (!tasksCtx.displayingByDate) {
    filterLabel = `${tasksCtx.displayed
      .charAt(0)
      .toUpperCase()}${tasksCtx.displayed.slice(1).replace("-", " ")} `;

    tasksCtx.displayed === "all" && (currList = tasksCtx.tasks);
    tasksCtx.displayed === "important" && (currList = tasksCtx.important);
    tasksCtx.displayed === "uncategorized" &&
      (currList = tasksCtx.uncategorized);
    tasksCtx.displayed === "no-date" && (currList = tasksCtx.noDate);
  }

  return (
    <Fragment>
      <h3 className={styles["filter"]}>{filterLabel}</h3>
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
                done={task.done}
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
