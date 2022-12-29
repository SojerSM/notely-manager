import { useContext } from "react";

import styles from "./GeneralFundData.module.css";

import FundContext from "../../../../store/fundContext/fund-context";
import ThemeContext from "../../../../store/themeContext/theme-context";

import FundCardHeader from "../../../UI/FundCardHeader";

import CardFilled from "../../../UI/Cards/CardFilled";
import GeneralFundItem from "./GeneralFundItem";
import GeneralFundSummary from "./GeneralFundSummary";

const GeneralFundData = function (props) {
  const fundCtx = useContext(FundContext);
  const { theme, defaultFontColor } = useContext(ThemeContext);

  const activeMonth = new Date(
    fundCtx.currYear,
    fundCtx.currMonth
  ).toLocaleString("en-US", { month: "long" });

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

  const monthBalance = incomesAmount - expensesAmount;
  const barFills = getBarFills();

  return (
    <CardFilled className={styles["general"]}>
      <FundCardHeader>{`Cashflow in ${activeMonth}`}</FundCardHeader>
      <div className={styles["overview"]} style={{ color: defaultFontColor }}>
        <GeneralFundItem
          type={"income"}
          funds={incomes}
          amount={incomesAmount}
          barFillWidth={barFills.incomeBar}
          theme={theme}
        />
        <GeneralFundItem
          type={"expense"}
          funds={expenses}
          amount={expensesAmount}
          barFillWidth={barFills.expenseBar}
          theme={theme}
        />
        <GeneralFundSummary
          balance={monthBalance}
          month={activeMonth}
          theme={theme}
        />
      </div>
    </CardFilled>
  );
};

export default GeneralFundData;
