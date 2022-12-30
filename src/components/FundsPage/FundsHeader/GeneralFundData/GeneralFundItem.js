import { capitalizeFirstLetter } from "../../../../utils/helpers";

import styles from "./GeneralFundItem.module.css";

const GeneralFundItem = function (props) {
  const text = `${capitalizeFirstLetter(props.type)}${
    props.funds.length !== 1 ? "s" : ""
  } of total`;

  const getBarColor = () => {
    let color;
    if (props.type === "income") color = `var(--${props.theme}__UI-blue)`;
    if (props.type === "expense") color = `var(--${props.theme}__UI-red)`;
    return color;
  };

  const barColor = getBarColor();

  return (
    <div className={styles["data-item"]}>
      <div className={styles["numbers"]}>
        <div className={styles["amount-wrapper"]}>
          <p className={styles["amount"]}>{props.funds.length}</p>
          <p className={styles["text"]}>{text}</p>
        </div>
        <h5 className={styles["total-worth"]}>{`${props.amount.toFixed(
          2
        )}$`}</h5>
      </div>
      <div
        className={styles["bar"]}
        style={{ outline: `2px solid ${barColor}` }}
      >
        <div
          className={styles["fill"]}
          style={{ width: props.barFillWidth, backgroundColor: barColor }}
        ></div>
      </div>
    </div>
  );
};

export default GeneralFundItem;
