import { useContext } from "react";

import styles from "./YearSummary.module.css";
import * as icons from "../../../../assets/icons";

import FundContext from "../../../../store/fundContext/fund-context";
import ThemeContext from "../../../../store/themeContext/theme-context";

import FundCardHeader from "../../../UI/FundCardHeader";
import CardFilled from "../../../UI/Cards/CardFilled";
import YearSummaryItem from "./YearSummaryItem";

const YearSummary = function (props) {
  const { theme } = useContext(ThemeContext);
  const fundCtx = useContext(FundContext);

  const bcgData = `var(--${theme}__gray-medium-light)`;

  const getTotalValue = (type) => {
    let total = fundCtx.currYearFunds
      .filter((fund) => {
        return fund.type === type;
      })
      .map((fund) => {
        return +fund.amount;
      });

    if (total.length < 1) return (0).toFixed(2);

    total = total.reduce((acc, curr) => {
      return acc + curr;
    });

    return total.toFixed(2);
  };

  const totalIncomes = getTotalValue("income");
  const totalExpenses = getTotalValue("expense");
  const balance = (totalIncomes - totalExpenses).toFixed(2);

  return (
    <CardFilled className={styles["overview"]}>
      <FundCardHeader
        className={`${
          theme === "dark" ? styles["header-dark"] : styles["header-light"]
        }`}
      >{`${fundCtx.currYear} overview`}</FundCardHeader>
      <div className={styles["data"]} style={{ backgroundColor: bcgData }}>
        <YearSummaryItem
          value={totalIncomes}
          icon={icons.incomesIcon}
          description={"earned"}
          theme={theme}
        />
        <YearSummaryItem
          value={totalExpenses}
          icon={icons.expensesIcon}
          description={"spent"}
          theme={theme}
        />
        <YearSummaryItem
          value={balance}
          icon={icons.balanceIcon}
          description={"saved"}
          theme={theme}
        />
      </div>
    </CardFilled>
  );
};

export default YearSummary;
