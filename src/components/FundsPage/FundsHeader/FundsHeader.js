import { Fragment, useState } from "react";

import styles from "./FundsHeader.module.css";

import AddButton from "../../UI/Buttons/AddButton";
import CardFilled from "../../UI/Cards/CardFilled";
import Modal from "../../UI/Modal";
import ExitButton from "../../UI/Buttons/ExitButton";
import Highlight from "../../UI/Highlight";
import AddFundsForm from "./AddFundsForm/AddFundsForm";
import FundsCalendar from "./FundsCalendar.js/FundsCalendar";

const FundsHeader = function () {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleFormHandler = (event) => {
    event.preventDefault();
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Fragment>
      {isFormOpen && (
        <Modal onClose={toggleFormHandler} className={styles["form-modal"]}>
          <ExitButton onClose={toggleFormHandler} />
          <AddFundsForm />
        </Modal>
      )}
      <div className={styles["header"]}>
        <div className={styles["add-section"]}>
          <h3 className={styles["title"]}>
            Your <Highlight>Funds</Highlight>
          </h3>
          <AddButton onClick={toggleFormHandler} />
        </div>
        <FundsCalendar />
        <CardFilled className={styles["pinned-goals"]}>Pinned goal</CardFilled>
        <CardFilled className={styles["general"]}>General info</CardFilled>
      </div>
    </Fragment>
  );
};

export default FundsHeader;
