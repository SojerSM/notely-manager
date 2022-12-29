import { useContext } from "react";

import styles from "./MonthlyAverage.module.css";

import FundContext from "../../../../store/fundContext/fund-context";
import ThemeContext from "../../../../store/themeContext/theme-context";

import CardFilled from "../../../UI/Cards/CardFilled";
import FundCardHeader from "../../../UI/FundCardHeader";

const MonthlyAverage = function (props) {
  const { defaultFontColor } = useContext(ThemeContext);
  const { avgMonthExpensesValue, avgMonthIncomesValue } =
    useContext(FundContext);

  return (
    <CardFilled className={styles["wrapper"]}>
      <FundCardHeader>{`This year average`}</FundCardHeader>
      <div className={styles["averages"]} style={{ color: defaultFontColor }}>
        <div className={styles["averages-item"]}>
          <p className={styles["title"]}>Incomes</p>
          <p className={styles["amount"]}>{avgMonthIncomesValue}$</p>
          <p className={styles["ending"]}>monthly</p>
        </div>
        <div className={styles["averages-item"]}>
          <p className={styles["title"]}>Expenses</p>
          <p className={styles["amount"]}>{avgMonthExpensesValue}$</p>
          <p className={styles["ending"]}>monthly</p>
        </div>
      </div>
    </CardFilled>
  );
};

export default MonthlyAverage;
