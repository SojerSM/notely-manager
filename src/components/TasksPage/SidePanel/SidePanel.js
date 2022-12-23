import { useState, useContext } from "react";

import styles from "./SidePanel.module.css";

import TaskContext from "../../../store/taskContext/task-context";

import Panel from "../../UI/Panel";
import Modal from "../../UI/Modal";
import ExitButton from "../../UI/Buttons/ExitButton";
import Button from "../../UI/Buttons/Button";
import TasksCalendar from "./TasksCalendar/TasksCalendar";
import RemoveDoneButton from "./RemoveDoneButton";

const SidePanel = function (props) {
  const { removeFinished } = useContext(TaskContext);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleFormHandler = (event) => {
    event.preventDefault();
    setIsFormOpen(!isFormOpen);
  };

  const removeDoneHandler = (event) => {
    event.preventDefault();
    setIsFormOpen(!isFormOpen);

    removeFinished();
  };

  return (
    <Panel>
      {isFormOpen && (
        <Modal onClose={toggleFormHandler} className={styles["modal"]}>
          <ExitButton onClose={toggleFormHandler} />
          <div className={styles["form"]}>
            <p>Are you sure?</p>
            <div className={styles["buttons"]}>
              <Button className={styles["button"]} onClick={removeDoneHandler}>
                Yes
              </Button>
              <Button className={styles["button"]} onClick={toggleFormHandler}>
                No
              </Button>
            </div>
          </div>
        </Modal>
      )}
      <h4 className={styles["side-page-title"]}>Calendar</h4>
      <TasksCalendar />
      <RemoveDoneButton onClick={toggleFormHandler} />
    </Panel>
  );
};

export default SidePanel;
