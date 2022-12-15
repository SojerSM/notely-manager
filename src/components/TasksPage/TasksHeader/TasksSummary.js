import { Fragment, useState, useContext } from "react";

import * as icons from "../../../assets/icons";
import styles from "./TasksSummary.module.css";

import TaskContext from "../../../store/taskContext/task-context";

import Button from "../../UI/Buttons/Button";
import ExitButton from "../../UI/Buttons/ExitButton";
import Modal from "../../UI/Modal";
import SummaryButton from "./SummaryButton";
import NewTask from "./NewTask/NewTask";

const TasksSummary = function (props) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const tasksCtx = useContext(TaskContext);

  const toggleFormHandler = (event) => {
    event.preventDefault();
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Fragment>
      {isFormOpen && (
        <Modal onClose={toggleFormHandler} className={styles["modal"]}>
          <ExitButton onClose={toggleFormHandler} />
          <NewTask />
        </Modal>
      )}
      <div className={styles["header"]}>
        <h3 className={styles["title"]}>Your Tasks</h3>
        <Button className={styles["add-button"]} onClick={toggleFormHandler}>
          <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
            {icons.addNewIcon}
          </svg>
          Add
        </Button>
      </div>
      <div className={styles["summary"]}>
        <SummaryButton
          title={"All"}
          id={"all"}
          amount={tasksCtx.tasks.length}
          tasksCtx={tasksCtx}
        />
        <SummaryButton
          title={"Important"}
          id={"important"}
          amount={tasksCtx.important.length}
          tasksCtx={tasksCtx}
        />
        <SummaryButton
          title={"Uncategorized"}
          id={"uncategorized"}
          amount={tasksCtx.uncategorized.length}
          tasksCtx={tasksCtx}
        />
        <SummaryButton title={"Upcoming"} amount={0} />
      </div>
    </Fragment>
  );
};

export default TasksSummary;
