import { useState } from "react";

import styles from "./FundsListToggler.module.css";

const FundsListToggler = function (props) {
  const [displayedList, setDisplayedList] = useState("incomes");

  const changeDisplayedHandler = (event) => {
    event.preventDefault();
    if (displayedList === "incomes") {
      setDisplayedList("expenses");
      return;
    }
    setDisplayedList("incomes");
  };

  const incomesClasses = `${styles["title"]} ${
    displayedList === "incomes" && styles["active"]
  }`;

  const expensesClasses = `${styles["title"]} ${
    displayedList === "expenses" && styles["active"]
  }`;

  return (
    <div className={styles["toggler"]}>
      <h4 className={incomesClasses}>Incomes</h4>
      <button className={styles["switch-btn"]} onClick={changeDisplayedHandler}>
        <div
          className={`${styles["slider"]} ${
            displayedList === "expenses" && styles["slider-right"]
          }`}
        ></div>
      </button>
      <h4 className={expensesClasses}>Expenses</h4>
    </div>
  );
};

export default FundsListToggler;
