import { useState } from "react";

import styles from "./FundsExpandedForm.module.css";

import Button from "../../../UI/Buttons/Button";
import TextInput from "../../../UI/Inputs/TextInput";
import DateInput from "../../../UI/Inputs/DateInput";
import IncomeSelector from "./IncomeSelector";
import ExpenseSelector from "./ExpenseSelector";

const FundsExpandedForm = function (props) {
  const [fundContent, setFundContent] = useState("");
  const [fundDate, setFundDate] = useState("");
  const [fundOption, setFundOption] = useState("others");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(fundContent);
    console.log(fundDate);
    console.log(fundOption);
    console.log(props.active);
    setFundContent("");
    setFundDate("");
    setFundOption("others");
  };

  const textChangeHandler = (text) => {
    setFundContent(text);
  };

  const dateChangeHandler = (date) => {
    setFundDate(date);
  };

  const selectHandler = (option) => {
    setFundOption(option);
  };

  return (
    <form className={styles["expanded-form"]} onSubmit={formSubmitHandler}>
      <TextInput
        className={styles["input"]}
        input={{
          placeholder: `Describe your ${props.active}...`,
          maxLength: 60,
        }}
        onChange={textChangeHandler}
        value={fundContent}
      />
      <div className={styles["categories"]}>
        <DateInput
          className={styles["date-input"]}
          input={{
            min: "2019-01-01",
            max: "2029-12-31",
          }}
          onChange={dateChangeHandler}
          value={fundDate}
        />
        <div className={styles["select-wrapper"]}>
          <p>Category</p>
          {props.active === "income" && (
            <IncomeSelector
              onChange={selectHandler}
              value={fundOption}
              active={props.active}
            />
          )}
          {props.active === "expense" && (
            <ExpenseSelector
              onChange={selectHandler}
              value={fundOption}
              active={props.active}
            />
          )}
        </div>
      </div>
      <Button className={styles["submit-btn"]} onClick={formSubmitHandler}>
        Submit
      </Button>
    </form>
  );
};

export default FundsExpandedForm;
