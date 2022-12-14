import styles from "./TaskItem.module.css";

import Card from "../../../UI/Card";

import TaskDate from "./TaskDate";

const TaskItem = function (props) {
  const makeUpperCase = (text) => {
    return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
  };

  return (
    <Card className={styles["task"]}>
      <TaskDate date={props.date} />
      <p className={styles["content"]}>{makeUpperCase(props.content)}</p>
      <div className={styles["content-details"]}>
        <div className={styles["option"]}>
          <p>{makeUpperCase(props.option)}</p>
        </div>
        <div>{props.priority ? "Important" : "Not important"}</div>
      </div>
    </Card>
  );
};

export default TaskItem;
