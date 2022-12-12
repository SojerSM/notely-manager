import styles from "./NewTask.module.css";

import TextInput from "../../../UI/Inputs/TextInput";
import DateInput from "../../../UI/Inputs/DateInput";

const NewTask = function (props) {
  return (
    <form className={styles["form"]}>
      <h4>Create new Task</h4>
      <TextInput
        className={styles["input"]}
        input={{ placeholder: "Describe it...", maxLength: 60 }}
      />
      <div className={styles["categories"]}>
        <DateInput
          className={styles["date-input"]}
          input={{ min: "2020-01-01", max: "2029-12-31" }}
        />
      </div>
    </form>
  );
};

export default NewTask;
