import { useContext } from "react";
import { PieChart } from "react-minimal-pie-chart";

// import styles from "./PieChart.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

const CircleDiagram = function (props) {
  const { currMonthFunds } = useContext(FundContext);

  const getTotalValue = () => {
    let filtered = currMonthFunds.filter((fund) => {
      return fund.type === "expense";
    });

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
    <div>
      <PieChart
        data={[
          { title: "Fixed", value: fixedValue, color: "#C13C37" },
          { title: "Bills", value: billsValue, color: "#E38627" },
          { title: "Grocery", value: groceryValue, color: "#6A2135" },
          { title: "Transport", value: transportValue, color: "red" },
          { title: "Clothes", value: clothesValue, color: "yellow" },
          { title: "Medicines", value: medicinesValue, color: "brown" },
          { title: "Meetings", value: meetingsValue, color: "blue" },
          { title: "Events", value: eventsValue, color: "green" },
          { title: "Others", value: othersValue, color: "gray" },
        ]}
        totalValue={chartTotal}
        lineWidth={25}
        startAngle={267}
        animate={true}
        animationDuration={1000}
        radius={40}
      />
    </div>
  );
};

export default CircleDiagram;
