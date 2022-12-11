import styles from "./NewTaskForm.module.css";

import Button from "../../UI/Button";

const NewTaskForm = function (props) {
  return (
    <form className={styles["form"]}>
      <div className={styles["form-header"]}>
        <h4>Create new</h4>
        <div>
          <Button className={styles["form-button"]}>Task</Button>
          <Button className={styles["form-button"]}>Goal</Button>
        </div>
      </div>
    </form>
  );
};

export default NewTaskForm;
