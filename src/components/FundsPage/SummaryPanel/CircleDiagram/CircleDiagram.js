import { useContext } from "react";

import styles from "./CircleDiagram.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

import Chart from "./Chart";
import CardFilled from "../../../UI/Cards/CardFilled";

const CircleDiagram = function (props) {
  const { currMonth, currYear } = useContext(FundContext);

  const activeMonth = new Date(currYear, currMonth).toLocaleString("en-US", {
    month: "long",
  });

  return (
    <CardFilled className={styles["diagram"]}>
      <div className={styles["header"]}>
        <h5>Expenses in {activeMonth}</h5>
      </div>
      <Chart />
    </CardFilled>
  );
};

export default CircleDiagram;
