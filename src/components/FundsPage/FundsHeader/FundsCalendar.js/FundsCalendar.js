import { useContext } from "react";

import styles from "./FundsCalendar.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

import CardFilled from "../../../UI/Cards/CardFilled";
import FundsYearSelector from "./FundsYearSelector";
import FundsMonthSelector from "./FundsMonthSelector";

const FundsCalendar = function (props) {
  const fundCtx = useContext(FundContext);

  const changeYearHandler = (year) => {
    fundCtx.changeYear(+year);
  };

  const changeMonthHandler = (month) => {
    fundCtx.changeMonth(month);
  };

  return (
    <CardFilled className={styles["date"]}>
      <FundsYearSelector onChange={changeYearHandler} />
      <FundsMonthSelector onChange={changeMonthHandler} />
    </CardFilled>
  );
};

export default FundsCalendar;
