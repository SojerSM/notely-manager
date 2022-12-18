import styles from "./FundsList.module.css";

import CardFilled from "../../UI/Cards/CardFilled";
import FundsListToggler from "./FundsListToggler";

const FundsList = function (props) {
  return (
    <CardFilled className={styles["list"]}>
      <FundsListToggler />
      <div>FundsList</div>
    </CardFilled>
  );
};

export default FundsList;
