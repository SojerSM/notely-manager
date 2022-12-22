import { useContext } from "react";
import { PieChart } from "react-minimal-pie-chart";

import styles from "./Chart.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

import ChartLabel from "./ChartLabel";

const Chart = function (props) {
  const { currMonthFunds, avgMonthExpensesValue } = useContext(FundContext);

  const filtered = currMonthFunds.filter((fund) => {
    return fund.type === "expense";
  });

  const getTotalValue = () => {
    if (filtered.length < 1) return 0;

    let total = filtered
      .map((fund) => {
        return fund.amount;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      });

    return +total;
  };

  const getValueOfType = (type) => {
    let value = currMonthFunds
      .filter((fund) => {
        return fund.option === type;
      })
      .map((fund) => {
        return fund.amount;
      });

    if (value.length === 0) return 0;

    return value.reduce((acc, curr) => {
      return acc + curr;
    });
  };

  const getContent = () => {
    if (filtered.length === 0)
      return (
        <div className={styles["content"]}>
          <p>no data</p>
        </div>
      );

    let value = filtered
      .map((fund) => {
        return fund.amount;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      });

    let percentage =
      value > avgMonthExpensesValue
        ? (value / avgMonthExpensesValue) * 100 - 100
        : (avgMonthExpensesValue / value) * 100 - 100;

    return value > avgMonthExpensesValue ? (
      <div className={styles["content"]}>
        <p>above average</p>
        <p className={styles["percentage"]}>by {percentage.toFixed(2)}%</p>
      </div>
    ) : (
      <div className={styles["content"]}>
        <p>below average</p>
        <p className={styles["percentage"]}>by {percentage.toFixed(2)}%</p>
      </div>
    );
  };

  const chartTotal = getTotalValue();

  const expenses = [
    { value: getValueOfType("fixed"), title: "Fixed", color: "#FF4848" },
    { value: getValueOfType("bills"), title: "Bills", color: "#E13D7A" },
    {
      value: getValueOfType("grocery"),
      title: "Grocery",
      color: "#FFFA43",
    },
    {
      value: getValueOfType("transport"),
      title: "Transport",
      color: "#8D9A50",
    },
    { value: getValueOfType("clothes"), title: "Clothes", color: "#7F4D3E" },
    {
      value: getValueOfType("medicines"),
      title: "Medicines",
      color: "#7EB57B",
    },
    { value: getValueOfType("meetings"), title: "Meetings", color: "#4A804A" },
    { value: getValueOfType("events"), title: "Events", color: "#B8BD85" },
    { value: getValueOfType("others"), title: "Others", color: "#F1F4CC" },
  ];

  return (
    <div className={styles["chart"]}>
      {filtered.length > 0 && (
        <PieChart
          data={expenses.map((expense) => {
            return {
              title: expense.title,
              value: expense.value,
              color: expense.color,
            };
          })}
          totalValue={chartTotal}
          lineWidth={28}
          startAngle={260}
          animate={true}
          animationDuration={1000}
          radius={30}
          center={[50, 32]}
        />
      )}
      {getContent()}
      <div className={styles["labels"]}>
        {expenses
          .filter((expense) => {
            return expense.value > 0;
          })
          .map((expense) => {
            return (
              <ChartLabel
                value={expense.value}
                color={expense.color}
                title={expense.title}
                total={chartTotal}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Chart;
