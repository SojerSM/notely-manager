import styles from "./GeneralFundItem.module.css";

const GeneralFundItem = function (props) {
  return (
    <div className={styles["data-item"]}>
      <div className={styles["numbers"]}>
        <p className={styles["amount"]}>5</p>
        <p className={styles["text"]}>incomes</p>
        <h5 className={styles["total-worth"]}>2500.00$</h5>
      </div>
      <div className={styles["bar"]}>
        <div className={styles["fill"]}></div>
      </div>
    </div>
  );
};

export default GeneralFundItem;
