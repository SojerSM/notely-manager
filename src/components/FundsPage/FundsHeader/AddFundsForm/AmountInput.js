import { Fragment } from "react";

import styles from "./AmountInput.module.css";

const AmountInput = function (props) {
  const inputHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  const bcgInput = `var(--${props.theme}__gray-forms)`;

  return (
    <Fragment>
      <input
        onChange={inputHandler}
        className={styles["input"]}
        style={{ backgroundColor: bcgInput }}
        id={"amount"}
        type={"number"}
        min={"0.01"}
        max={"99999.99"}
        step={"0.01"}
        value={props.value}
      ></input>
    </Fragment>
  );
};

export default AmountInput;
