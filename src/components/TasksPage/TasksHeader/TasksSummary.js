import { Fragment, useState } from "react";

import * as icons from "../../../assets/icons";
import styles from "./TasksSummary.module.css";

import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import SummaryButton from "./SummaryButton";

const TasksSummary = function (props) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addNewHandler = (event) => {
    event.preventDefault();
    setIsFormOpen(true);
  };

  const closeModalHandler = (event) => {
    event.preventDefault();
    setIsFormOpen(false);
  };

  return (
    <Fragment>
      {isFormOpen && <Modal onConfirm={closeModalHandler}>ModalContent</Modal>}
      <div className={styles.header}>
        <h3 className={styles.title}>Your Tasks</h3>
        <Button className={styles["add-button"]} onClick={addNewHandler}>
          <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
            {icons.addNewIcon}
          </svg>
          Add
        </Button>
      </div>
      <div className={styles.summary}>
        <SummaryButton title={"All"} />
        <SummaryButton title={"Important"} />
        <SummaryButton title={"Upcoming"} />
        <SummaryButton title={"Goals"} />
      </div>
    </Fragment>
  );
};

export default TasksSummary;
