import styles from "./FundsHeader.module.css";

import AddButton from "../../UI/Buttons/AddButton";

const FundsHeader = function () {
  return (
    <div className={styles["header"]}>
      <h3 className={styles["title"]}>Your wallet</h3>
      <AddButton />
    </div>
  );
};

export default FundsHeader;
