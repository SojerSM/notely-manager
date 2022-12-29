import styles from "./FundsListToggler.module.css";

const FundsListToggler = function (props) {
  const bcgToggler =
    props.theme === "dark"
      ? "var(--dark__gray-dark)"
      : "var(--light__gray-medium-dark)";
  const sliderColor = `var(--${props.theme}__UI-icon)`;

  const changeDisplayedHandler = (event) => {
    event.preventDefault();
    if (props.displayedList === "incomes") {
      props.onChange("expenses");
      return;
    }
    props.onChange("incomes");
  };

  const incomesClasses = `${styles["title"]} ${
    props.displayedList === "incomes" && styles["active"]
  }`;

  const expensesClasses = `${styles["title"]} ${
    props.displayedList === "expenses" && styles["active"]
  }`;

  return (
    <div
      className={styles["toggler"]}
      style={{ backgroundColor: bcgToggler, color: props.fontColor }}
    >
      <h4 className={incomesClasses}>Incomes</h4>
      <button
        className={styles["switch-btn"]}
        style={{ outline: `2px solid ${sliderColor}` }}
        onClick={changeDisplayedHandler}
      >
        <div
          className={`${styles["slider"]} ${
            props.displayedList === "expenses" && styles["slider-right"]
          }`}
          style={{ backgroundColor: sliderColor }}
        ></div>
      </button>
      <h4 className={expensesClasses}>Expenses</h4>
    </div>
  );
};

export default FundsListToggler;
