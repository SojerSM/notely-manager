import styles from "./FundsList.module.css";

import CardFilled from "../../UI/Cards/CardFilled";

const FundsList = function (props) {
  return <CardFilled className={styles["list"]}>Funds list</CardFilled>;
};

export default FundsList;
