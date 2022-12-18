import styles from "./FundsCalendar.module.css";

import CardFilled from "../../../UI/Cards/CardFilled";
import FundsYearSelector from "./FundsYearSelector";
import FundsMonthSelector from "./FundsMonthSelector";

const FundsCalendar = function (props) {
  const changeYearHandler = (year) => {
    console.log(year);
  };

  const changeMonthHandler = (month) => {
    console.log(month);
  };

  return (
    <CardFilled className={styles["date"]}>
      <FundsYearSelector onChange={changeYearHandler} />
      <FundsMonthSelector onChange={changeMonthHandler} />
    </CardFilled>
  );
};

export default FundsCalendar;
