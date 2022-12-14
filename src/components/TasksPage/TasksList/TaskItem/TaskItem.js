import styles from "./TaskItem.module.css";

import Card from "../../../UI/Card";

const TaskItem = function (props) {
  return (
    <Card className={styles["task"]}>
      <p>TaskItem</p>
    </Card>
  );
};

export default TaskItem;
