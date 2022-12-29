import { useContext } from "react";

import styles from "./FundsCalendar.module.css";

import FundContext from "../../../../store/fundContext/fund-context";
import ThemeContext from "../../../../store/themeContext/theme-context";

import CardFilled from "../../../UI/Cards/CardFilled";
import FundCardHeader from "../../../UI/FundCardHeader";
import FundsYearSelector from "./FundsYearSelector";
import FundsMonthSelector from "./FundsMonthSelector";

const FundsCalendar = function (props) {
  const fundCtx = useContext(FundContext);
  const { theme, defaultFontColor } = useContext(ThemeContext);

  const changeYearHandler = (year) => {
    fundCtx.changeYear(year);
  };

  const changeMonthHandler = (month) => {
    fundCtx.changeMonth(month);
  };

  return (
    <CardFilled className={styles["date"]}>
      <FundCardHeader>{"Filtering by date"}</FundCardHeader>
      <div className={styles["selectors"]} style={{ color: defaultFontColor }}>
        <FundsYearSelector
          onChange={changeYearHandler}
          value={fundCtx.currYear}
          theme={theme}
        />
        <FundsMonthSelector
          onChange={changeMonthHandler}
          value={fundCtx.currMonth}
          theme={theme}
        />
      </div>
    </CardFilled>
  );
};

export default FundsCalendar;
