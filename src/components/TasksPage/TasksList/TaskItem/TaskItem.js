import { useContext } from "react";

import styles from "./TaskItem.module.css";
import * as icons from "../../../../assets/icons";

import TaskContext from "../../../../store/taskContext/task-context";

import Card from "../../../UI/Card";
import TaskDate from "./TaskDate";

const TaskItem = function (props) {
  const { removeTask } = useContext(TaskContext);

  const makeUpperCase = (text) => {
    return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    removeTask(props.id);
  };

  return (
    <Card className={styles["task"]}>
      <TaskDate date={props.date} />
      <p className={styles["content"]}>{makeUpperCase(props.content.trim())}</p>
      <div className={styles["content-details"]}>
        <div className={styles["option"]}>
          <p>{makeUpperCase(props.option)}</p>
        </div>
        <div>
          <svg
            className={`${
              !props.priority
                ? styles["svg-icon"]
                : styles["svg-icon-important"]
            }`}
            viewBox="0 0 20 20"
          >
            {icons.importantIcon}
          </svg>
        </div>
        <button className={styles["delete-button"]} onClick={deleteHandler}>
          <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
            {icons.deleteIcon}
          </svg>
        </button>
      </div>
    </Card>
  );
};

export default TaskItem;
