import { useState } from "react";

import styles from "./AddFundsForm.module.css";

import Button from "../../../UI/Buttons/Button";
import FundsExpandedForm from "./FundsExpandedForm";

const AddFundsForm = function (props) {
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [activeForm, setActiveForm] = useState("");

  const formExpandHandler = (event) => {
    event.preventDefault();
    setIsFormExpanded(true);
    setActiveForm(event.currentTarget.id);
  };

  return (
    <div className={styles["form"]}>
      <h4>Add new</h4>
      <div className={styles["options"]}>
        <Button onClick={formExpandHandler} id={"income"}>
          <p>Income</p>
        </Button>
        <Button onClick={formExpandHandler} id={"expense"}>
          <p>Expense</p>
        </Button>
      </div>
      {isFormExpanded && <FundsExpandedForm active={activeForm} />}
    </div>
  );
};

export default AddFundsForm;
