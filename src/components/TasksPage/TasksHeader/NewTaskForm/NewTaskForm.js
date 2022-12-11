import styles from "./NewTaskForm.module.css";

import ExitButton from "../../../UI/Buttons/ExitButton";
import NewTaskHeader from "./NewTaskHeader";

const NewTaskForm = function (props) {
  return (
    <form className={styles["form"]}>
      <ExitButton onClick={props.onConfirm} />
      <NewTaskHeader />
    </form>
  );
};

export default NewTaskForm;
