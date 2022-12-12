import styles from "./NewTask.module.css";

import TextInput from "../../../UI/Inputs/TextInput";

const NewTask = function (props) {
  return (
    <form className={styles["form"]}>
      <h4>Create new Task</h4>
      <TextInput />
    </form>
  );
};

export default NewTask;
