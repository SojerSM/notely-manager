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
        />
        <GeneralFundItem
          type={"expense"}
          funds={expenses}
          amount={expensesAmount}
        />
      </div>
    </CardFilled>
  );
};

export default GeneralFundData;
