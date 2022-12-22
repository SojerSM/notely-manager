import { useContext } from "react";
import { capitalizeFirstLetter } from "../../../../helpers/helpers";

import styles from "./FundItem.module.css";
import * as icons from "../../../../assets/icons";

import FundContext from "../../../../store/fundContext/fund-context";
import FundItemDate from "./FundItemDate";

const FundItem = function (props) {
  const fundCtx = useContext(FundContext);

  const deleteHandler = (event) => {
    event.preventDefault();
    fundCtx.removeFund(props.id);
  };

  const getAmountBcgColor = () => {
    let color;
    if (props.type === "income") color = "var(--dark__UI-blue)";
    if (props.type === "expense") color = "var(--dark__UI-red)";
    return color;
  };

  const amountBcgColor = getAmountBcgColor();

  return (
    <div className={styles["fund-item"]}>
      <FundItemDate date={props.date} />
      <p className={styles[["content"]]}>
        {capitalizeFirstLetter(props.content)}
      </p>
      <p className={styles["option"]}>{capitalizeFirstLetter(props.option)}</p>
      <div className={styles["content-details"]}>
        <div
          className={styles["amount"]}
          style={{ background: amountBcgColor }}
        >
          <p>{props.amount.toFixed(2)}$</p>
        </div>
        <button className={styles["delete-button"]} onClick={deleteHandler}>
          <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
            {icons.deleteIcon}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FundItem;
