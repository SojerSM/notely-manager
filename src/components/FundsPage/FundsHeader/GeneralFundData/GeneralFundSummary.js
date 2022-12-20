import styles from "./GeneralFundSummary.module.css";

import Card from "../../../UI/Cards/Card";

const GeneralFundSummary = function (props) {
  const balanceColor =
    props.balance < 0 ? "rgb(210, 86, 86)" : "var(--font-color-light)";

  return (
    <Card className={styles["summary"]}>
      <div className={styles["content"]}>
        <p>Balance:</p>
      </div>
      <h5 className={styles["amount"]} style={{ color: balanceColor }}>
        {props.balance.toFixed(2)}
        <span>$</span>
      </h5>
    </Card>
  );
};

export default GeneralFundSummary;
