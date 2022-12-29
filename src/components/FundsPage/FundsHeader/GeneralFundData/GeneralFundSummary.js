import styles from "./GeneralFundSummary.module.css";

import Card from "../../../UI/Cards/Card";

const GeneralFundSummary = function (props) {
  const balanceColor =
    props.balance < 0 ? `var(--${props.theme}__UI-red)` : "inherit";

  return (
    <Card
      className={styles["summary"]}
      style={{ outline: `3px solid var(--${props.theme}__gray-medium-light)` }}
    >
      <div className={styles["content"]}>
        <p>Balance:</p>
      </div>
      <h5
        className={styles["amount"]}
        style={{
          color: balanceColor,
        }}
      >
        {props.balance.toFixed(2)}$
      </h5>
    </Card>
  );
};

export default GeneralFundSummary;
