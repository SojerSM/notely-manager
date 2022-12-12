import { useContext, useRef } from "react";

import styles from "./NewTask.module.css";

import TaskContext from "../../../../store/taskContext/task-context";

import TextInput from "../../../UI/Inputs/TextInput";
import DateInput from "../../../UI/Inputs/DateInput";
import TaskSelector from "./TaskSelector";
import Button from "../../../UI/Buttons/Button";

const NewTask = function (props) {
  const task = useContext(TaskContext);

  const priorityInputRef = useRef();

  const formConfirmHandler = (event) => {
    event.preventDefault();
    console.log(task);
    console.log(priorityInputRef.current.value);
  };

  return (
    <form className={styles["form"]} onSubmit={formConfirmHandler}>
      <h4>Create new Task</h4>
      <TextInput
        className={styles["input"]}
        input={{
          placeholder: "Describe it...",
          maxLength: 60,
        }}
      />
      <div className={styles["categories"]}>
        <DateInput
          className={styles["date-input"]}
          input={{
            min: "2020-01-01",
            max: "2029-12-31",
          }}
        />
        <div className={styles["select-wrapper"]}>
          <p>Category</p>
          <TaskSelector />
        </div>
        <div className={styles["radio-btn"]}>
          <label htmlFor={"important"}>Important</label>
          <input
            type={"radio"}
            id={"important"}
            autoComplete={"off"}
            ref={priorityInputRef}
          />
        </div>
      </div>
      <span />
      <Button className={styles["submit-btn"]} onSubmit={formConfirmHandler}>
        Submit
      </Button>
    </form>
  );
};

export default NewTask;
