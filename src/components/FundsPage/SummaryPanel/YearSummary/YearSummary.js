import { useContext } from "react";

import styles from "./YearSummary.module.css";
import * as icons from "../../../../assets/icons";

import FundContext from "../../../../store/fundContext/fund-context";

import FundCardHeader from "../../../UI/FundCardHeader";
import CardFilled from "../../../UI/Cards/CardFilled";
import YearSummaryItem from "./YearSummaryItem";

const YearSummary = function (props) {
  const fundCtx = useContext(FundContext);

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
      <FundCardHeader>{`${fundCtx.currYear} overview`}</FundCardHeader>
      <div className={styles["data"]}>
        <YearSummaryItem value={totalIncomes} icon={icons.incomesIcon} />
        <YearSummaryItem value={totalExpenses} icon={icons.expensesIcon} />
        <YearSummaryItem value={balance} icon={icons.balanceIcon} />
      </div>
    </CardFilled>
  );
};

export default YearSummary;
