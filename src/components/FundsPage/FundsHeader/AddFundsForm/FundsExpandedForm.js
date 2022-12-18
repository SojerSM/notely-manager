import { useState, useContext } from "react";

import styles from "./FundsExpandedForm.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

import Button from "../../../UI/Buttons/Button";
import TextInput from "../../../UI/Inputs/TextInput";
import DateInput from "../../../UI/Inputs/DateInput";
import IncomeSelector from "./IncomeSelector";
import ExpenseSelector from "./ExpenseSelector";
import AddFundsError from "./AddFundsError";

const FundsExpandedForm = function (props) {
  const fundCtx = useContext(FundContext);

  const [fundContent, setFundContent] = useState("");
  const [fundDate, setFundDate] = useState("");
  const [fundOption, setFundOption] = useState("others");
  const [formError, setFormError] = useState({
    status: false,
    description: "",
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (fundContent.trim().length === 0 || fundDate === "") {
      setFormError({
        status: true,
        description: "Enter correct description and date.",
      });
      clearFormValues();
      return;
    }

    const newFund = {
      key: Math.random().toString(),
      content: fundContent.trim(),
      date: new Date(fundDate),
      option: fundOption,
      active: props.active,
    };

    fundCtx.addFund(newFund);

    setFormError({ status: false });
    clearFormValues();
  };

  const clearFormValues = () => {
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
          maxLength: 40,
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
      {formError.status && <AddFundsError formError={formError} />}
    </form>
  );
};

export default FundsExpandedForm;
