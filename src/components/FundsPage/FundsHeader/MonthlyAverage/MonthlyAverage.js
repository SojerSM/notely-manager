import styles from "./MonthlyAverage.module.css";

import CardFilled from "../../../UI/Cards/CardFilled";
import FundCardHeader from "../../../UI/FundCardHeader";

const MonthlyAverage = function (props) {
  return (
    <CardFilled className={styles["wrapper"]}>
      <FundCardHeader>{`This year average`}</FundCardHeader>
    </CardFilled>
  );
};

export default MonthlyAverage;
