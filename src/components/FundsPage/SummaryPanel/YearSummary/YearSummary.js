import { useContext } from "react";

import styles from "./YearSummary.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

import CardFilled from "../../../UI/Cards/CardFilled";

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

    if (total.length < 1) return 0;

    total = total.reduce((acc, curr) => {
      return acc + curr;
    });

    return total.toFixed(2);
  };

  const totalIncomes = getTotalValue("income");
  const totalExpenses = getTotalValue("expense");
  const balance = totalIncomes - totalExpenses;

  return (
    <CardFilled className={styles["overview"]}>
      <div className={styles["header"]}>
        <h5>{fundCtx.currYear} overview</h5>
      </div>
      <div className={styles["data"]}>
        <div>
          <p>Incomes</p>
          <h6>{totalIncomes}$</h6>
        </div>
        <div>
          <p>Expenses</p>
          <h6>{totalExpenses}$</h6>
        </div>
        <div>
          <p>Balance</p>
          <h6>{balance}$</h6>
        </div>
      </div>
    </CardFilled>
  );
};

export default YearSummary;
