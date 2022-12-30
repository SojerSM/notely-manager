import { useContext } from "react";
import { capitalizeFirstLetter } from "../../../../utils/helpers";

import styles from "./TaskItem.module.css";
import * as icons from "../../../../assets/icons";

import TaskContext from "../../../../store/taskContext/task-context";

import Card from "../../../UI/Cards/Card";
import TaskDate from "./TaskDate";

const TaskItem = function (props) {
  const { removeTask, toggleDone } = useContext(TaskContext);

  const doneClass = props.theme === "dark" ? "done-dark" : "done-light";
  const optionClass = props.theme === "dark" ? "option-dark" : "option-light";
  const optionDoneClass =
    props.theme === "dark" ? "option-done-dark" : "option-done-light";
  const iconColor =
    props.theme === "dark" ? "var(--dark__font-light)" : "var(--light__UI-icon";
  const iconImportantColor =
    props.theme === "dark" ? "var(--dark__yellow)" : "var(--light__yellow)";

  const deleteHandler = (event) => {
    event.preventDefault();
    removeTask(props.id);
  };

  const doneHandler = (event) => {
    event.preventDefault();
    toggleDone(props.id);
  };

  return (
    <Card className={styles["task"]}>
      <TaskDate date={props.date} done={props.done} theme={props.theme} />
      <div className={styles["priority"]}>
        <svg
          className={`${
            !props.priority ? styles["svg-icon"] : styles["svg-icon-important"]
          }`}
          style={{ fill: !props.priority ? iconColor : iconImportantColor }}
          viewBox="0 0 20 20"
        >
          {icons.importantIcon}
        </svg>
      </div>
      <p className={`${styles["content"]} ${props.done && styles[doneClass]}`}>
        {capitalizeFirstLetter(props.content.trim())}
      </p>
      <div className={styles["content-details"]}>
        <div
          className={`${styles[optionClass]} ${
            props.done && styles[optionDoneClass]
          }`}
        >
          <p>{capitalizeFirstLetter(props.option)}</p>
        </div>
        <div className={styles["icons"]}></div>
        <button className={styles["done-button"]} onClick={doneHandler}>
          <svg
            className={styles["svg-icon"]}
            style={{ fill: iconColor }}
            viewBox="0 0 20 20"
          >
            {icons.setAsDoneIcon}
          </svg>
        </button>
        <button className={styles["delete-button"]} onClick={deleteHandler}>
          <svg
            className={styles["svg-icon"]}
            style={{ fill: iconColor }}
            viewBox="0 0 20 20"
          >
            {icons.deleteIcon}
          </svg>
        </button>
      </div>
    </Card>
  );
};

export default TaskItem;
