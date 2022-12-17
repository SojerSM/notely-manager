import { Fragment, useState, useContext } from "react";

import styles from "./TasksSummary.module.css";

import TaskContext from "../../../store/taskContext/task-context";

import AddButton from "../../UI/Buttons/AddButton";
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
        <AddButton onClick={toggleFormHandler} />
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
        <SummaryButton
          title={"No Date"}
          id={"no-date"}
          amount={tasksCtx.noDate.length}
          tasksCtx={tasksCtx}
        />
      </div>
    </Fragment>
  );
};

export default TasksSummary;
