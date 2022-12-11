import styles from "./NewTaskForm.module.css";

import ExitButton from "../../UI/Buttons/ExitButton";

const NewTaskForm = function (props) {
  return (
    <form className={styles["form"]}>
      <ExitButton />
      <div className={styles["form-header"]}>
        <h4>Create new</h4>
        <div></div>
      </div>
    </form>
  );
};

export default NewTaskForm;
