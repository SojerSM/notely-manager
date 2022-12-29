import { useState, useContext } from "react";

import styles from "./FundsExpandedForm.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

import Button from "../../../UI/Buttons/Button";
import TextInput from "../../../UI/Inputs/TextInput";
import DateInput from "../../../UI/Inputs/DateInput";
import IncomeSelector from "./IncomeSelector";
import ExpenseSelector from "./ExpenseSelector";
import AddFundsError from "./AddFundsError";
import AmountInput from "./AmountInput";

const FundsExpandedForm = function (props) {
  const fundCtx = useContext(FundContext);

  const [fundContent, setFundContent] = useState("");
  const [fundDate, setFundDate] = useState("");
  const [fundOption, setFundOption] = useState("others");
  const [fundAmount, setFundAmount] = useState("");
  const [formError, setFormError] = useState({
    status: false,
    description: "",
  });

  const bcgCategories = `var(--${props.theme}__gray-medium-dark)`;

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
    if (+fundAmount > 99999.99 || +fundAmount < 0.01) {
      setFormError({
        status: true,
        description: "Enter correct amount (max 99 999.99 $).",
      });
      clearFormValues();
      return;
    }

    const newFund = {
      key: Math.random().toString(),
      content: fundContent.trim(),
      date: new Date(fundDate),
      option: fundOption,
      amount: +fundAmount,
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
    setFundAmount("");
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

  const amountHandler = (amount) => {
    setFundAmount(amount);
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
      <div
        className={styles["categories"]}
        style={{ backgroundColor: bcgCategories }}
      >
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
              theme={props.theme}
            />
          )}
          {props.active === "expense" && (
            <ExpenseSelector
              onChange={selectHandler}
              value={fundOption}
              active={props.active}
              theme={props.theme}
            />
          )}
        </div>
        <div className={styles["amount-wrapper"]}>
          <p>Amount</p>
          <AmountInput
            onChange={amountHandler}
            value={fundAmount}
            theme={props.theme}
          />
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
