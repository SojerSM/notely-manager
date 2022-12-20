import { useContext } from "react";
import { PieChart } from "react-minimal-pie-chart";

import styles from "./Chart.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

const Chart = function (props) {
  const { currMonthFunds } = useContext(FundContext);

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

  const chartTotal = getTotalValue();

  const billsValue = getValueOfType("bills");
  const fixedValue = getValueOfType("fixed");
  const groceryValue = getValueOfType("grocery");
  const transportValue = getValueOfType("transport");
  const clothesValue = getValueOfType("clothes");
  const medicinesValue = getValueOfType("medicines");
  const meetingsValue = getValueOfType("meetings");
  const eventsValue = getValueOfType("events");
  const othersValue = getValueOfType("others");

  return (
    <div className={styles["chart"]}>
      {filtered.length > 0 && (
        <PieChart
          data={[
            { title: "Fixed", value: fixedValue, color: "#C13C37" },
            { title: "Bills", value: billsValue, color: "#E38627" },
            { title: "Grocery", value: groceryValue, color: "#6A2135" },
            { title: "Transport", value: transportValue, color: "#6ba89e" },
            { title: "Clothes", value: clothesValue, color: "#6e6353" },
            { title: "Medicines", value: medicinesValue, color: "brown" },
            { title: "Meetings", value: meetingsValue, color: "#533309" },
            { title: "Events", value: eventsValue, color: "green" },
            { title: "Others", value: othersValue, color: "#c28b89" },
          ]}
          totalValue={chartTotal}
          lineWidth={28}
          startAngle={260}
          animate={true}
          animationDuration={1000}
          radius={30}
          center={[50, 32]}
        />
      )}
      {filtered.length === 0 ? (
        <p className={styles["alt-text"]}>No data.</p>
      ) : (
        <p className={styles["content"]}>Data</p>
      )}
    </div>
  );
};

export default Chart;
