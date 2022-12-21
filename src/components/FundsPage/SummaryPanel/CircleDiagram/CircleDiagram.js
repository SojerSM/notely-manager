import { useContext } from "react";

import styles from "./CircleDiagram.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

import Chart from "./Chart";
import CardFilled from "../../../UI/Cards/CardFilled";
import FundCardHeader from "../../../UI/FundCardHeader";

const CircleDiagram = function (props) {
  const { currMonth, currYear } = useContext(FundContext);

  const activeMonth = new Date(currYear, currMonth).toLocaleString("en-US", {
    month: "long",
  });

  return (
    <CardFilled className={styles["diagram"]}>
      <FundCardHeader>{`Expenses in ${activeMonth}`}</FundCardHeader>
      <Chart />
    </CardFilled>
  );
};

export default CircleDiagram;
