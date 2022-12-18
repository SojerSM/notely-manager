import { useState } from "react";

import styles from "./FundsList.module.css";

import CardFilled from "../../UI/Cards/CardFilled";
import FundsListToggler from "./FundsListToggler";

const FundsList = function (props) {
  const [displayedList, setDisplayedList] = useState("incomes");

  const changeDisplayedList = (value) => {
    setDisplayedList(value);
  };

  return (
    <CardFilled className={styles["list"]}>
      <FundsListToggler
        displayedList={displayedList}
        onChange={changeDisplayedList}
      />
      <div>{displayedList}</div>
    </CardFilled>
  );
};

export default FundsList;
