import { capitalizeFirstLetter } from "../../../../helpers/helpers";

import styles from "./GeneralFundItem.module.css";

const GeneralFundItem = function (props) {
  const text = `${capitalizeFirstLetter(props.type)}${
    props.funds.length > 1 ? "s" : ""
  } of total`;

  return (
    <div className={styles["data-item"]}>
      <div className={styles["numbers"]}>
        <div className={styles["amount-wrapper"]}>
          <p className={styles["amount"]}>{props.funds.length}</p>
          <p className={styles["text"]}>{text}</p>
        </div>
        <h5 className={styles["total-worth"]}>{`${props.amount}$`}</h5>
      </div>
      <div className={styles["bar"]}>
        <div
          className={styles["fill"]}
          style={{ width: props.barFillWidth }}
        ></div>
      </div>
    </div>
  );
};

export default GeneralFundItem;
