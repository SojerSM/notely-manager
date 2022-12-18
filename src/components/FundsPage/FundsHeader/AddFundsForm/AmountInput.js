import { Fragment } from "react";

import styles from "./AmountInput.module.css";

const AmountInput = function (props) {
  const inputHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  return (
    <Fragment>
      <input
        onChange={inputHandler}
        className={styles["input"]}
        id={"amount"}
        type={"number"}
        min={"0.01"}
        step={"0.01"}
        value={props.value}
      ></input>
    </Fragment>
  );
};

export default AmountInput;
