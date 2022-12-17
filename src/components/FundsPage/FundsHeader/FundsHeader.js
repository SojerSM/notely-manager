import styles from "./FundsHeader.module.css";

import AddButton from "../../UI/Buttons/AddButton";
import CardFilled from "../../UI/Cards/CardFilled";

const FundsHeader = function () {
  return (
    <div className={styles["header"]}>
      <div className={styles["left-section"]}>
        <div className={styles["add-section"]}>
          <h3 className={styles["title"]}>Your Finances</h3>
          <AddButton />
        </div>
        <CardFilled className={styles["date"]}>Year/month</CardFilled>
      </div>
      <CardFilled className={styles["pinned-goals"]}>Pinned goal</CardFilled>
    </div>
  );
};

export default FundsHeader;
