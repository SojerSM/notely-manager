import { useContext } from "react";

import styles from "./CircleDiagram.module.css";

import FundContext from "../../../../store/fundContext/fund-context";
import ThemeContext from "../../../../store/themeContext/theme-context";

import Chart from "./Chart";
import CardFilled from "../../../UI/Cards/CardFilled";
import FundCardHeader from "../../../UI/FundCardHeader";

const CircleDiagram = function (props) {
  const { theme } = useContext(ThemeContext);
  const { currMonth, currYear } = useContext(FundContext);

  const activeMonth = new Date(currYear, currMonth).toLocaleString("en-US", {
    month: "long",
  });

  return (
    <CardFilled className={styles["diagram"]}>
      <FundCardHeader
        className={`${
          theme === "dark" ? styles["header-dark"] : styles["header-light"]
        }`}
      >{`Expenses in ${activeMonth}`}</FundCardHeader>
      <Chart theme={theme} />
    </CardFilled>
  );
};

export default CircleDiagram;
