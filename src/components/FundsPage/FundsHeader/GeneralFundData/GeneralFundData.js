import { useContext } from "react";

import styles from "./GeneralFundData.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

import CardFilled from "../../../UI/Cards/CardFilled";
import GeneralFundItem from "./GeneralFundItem";

const GeneralFundData = function (props) {
  const fundCtx = useContext(FundContext);

  const incomes = fundCtx.currMonthFunds.filter((fund) => {
    return fund.type === "income";
  });

  const expenses = fundCtx.currMonthFunds.filter((fund) => {
    return fund.type === "expense";
  });

  const getAmount = (funds) => {
    return funds.length > 0
      ? funds
          .map((fund) => {
            return fund.amount;
          })
          .reduce((total, current) => {
            return total + current;
          })
      : 0;
  };

  const incomesAmount = getAmount(incomes);
  const expensesAmount = getAmount(expenses);

  const getBarFills = () => {
    let incomeBar, expenseBar;
    if (incomesAmount > expensesAmount) {
      incomeBar = "100%";
      expenseBar = Math.round((expensesAmount / incomesAmount) * 100) + "%";
    }
    if (incomesAmount < expensesAmount) {
      expenseBar = "100%";
      incomeBar = Math.round((incomesAmount / expensesAmount) * 100) + "%";
    }
    if (incomesAmount === 0 && expensesAmount === 0) {
      expenseBar = "0%";
      incomeBar = "0%";
    }
    return { incomeBar, expenseBar };
  };

  const barFills = getBarFills();

  return (
    <CardFilled className={styles["general"]}>
      <div className={styles["header"]}>
        <h4>General Overview</h4>
      </div>
      <div className={styles["overview"]}>
        <GeneralFundItem
          type={"income"}
          funds={incomes}
          amount={incomesAmount}
          barFillWidth={barFills.incomeBar}
        />
        <GeneralFundItem
          type={"expense"}
          funds={expenses}
          amount={expensesAmount}
          barFillWidth={barFills.expenseBar}
        />
      </div>
    </CardFilled>
  );
};

export default GeneralFundData;
