import { useContext, useRef, useState } from "react";

import styles from "./NewTask.module.css";

import TaskContext from "../../../../store/taskContext/task-context";

import TextInput from "../../../UI/Inputs/TextInput";
import DateInput from "../../../UI/Inputs/DateInput";
import TaskSelector from "./TaskSelector";
import Button from "../../../UI/Buttons/Button";

const NewTask = function (props) {
  const task = useContext(TaskContext);

  const [taskContent, setTaskContent] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskOption, setTaskOption] = useState("work");

  const priorityInputRef = useRef();

  const formConfirmHandler = (event) => {
    event.preventDefault();
    console.log(task);
    console.log(taskContent);
    console.log(taskDate);
    console.log(taskOption);
    console.log(priorityInputRef.current.value);
    setTaskContent("");
    setTaskDate("");
    setTaskOption("");
  };

  const textChangeHandler = (text) => {
    setTaskContent(text);
  };

  const dateChangeHandler = (date) => {
    setTaskDate(date);
  };

  const selectHandler = (option) => {
    setTaskOption(option);
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
        onChange={textChangeHandler}
        value={taskContent}
      />
      <div className={styles["categories"]}>
        <DateInput
          className={styles["date-input"]}
          input={{
            min: "2020-01-01",
            max: "2029-12-31",
          }}
          onChange={dateChangeHandler}
          value={taskDate}
        />
        <div className={styles["select-wrapper"]}>
          <p>Category</p>
          <TaskSelector onChange={selectHandler} />
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
