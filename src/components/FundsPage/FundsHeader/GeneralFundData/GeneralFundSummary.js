import styles from "./GeneralFundSummary.module.css";

import Card from "../../../UI/Cards/Card";

const GeneralFundSummary = function (props) {
  const balanceColor =
    props.balance < 0 ? "var(--dark__UI-red)" : "var(--dark__font-light)";

  return (
    <Card className={styles["summary"]}>
      <div className={styles["content"]}>
        <p>Balance:</p>
      </div>
      <h5 className={styles["amount"]} style={{ color: balanceColor }}>
        {props.balance.toFixed(2)}$
      </h5>
    </Card>
  );
};

export default GeneralFundSummary;
