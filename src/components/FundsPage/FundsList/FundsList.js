import { useState, useContext } from "react";

import styles from "./FundsList.module.css";

import FundContext from "../../../store/fundContext/fund-context";

import CardFilled from "../../UI/Cards/CardFilled";
import FundsListToggler from "./FundsListToggler";
import FundItem from "./FundItem/FundItem";

const FundsList = function (props) {
  const fundCtx = useContext(FundContext);

  const [displayedList, setDisplayedList] = useState("incomes");

  const changeDisplayedList = (value) => {
    setDisplayedList(value);
  };

  return (
    <CardFilled className={styles["list-wrapper"]}>
      <FundsListToggler
        displayedList={displayedList}
        onChange={changeDisplayedList}
      />
      <div className={styles["list"]}>
        {displayedList === "incomes" &&
          fundCtx.incomes.map((item) => {
            return (
              <FundItem
                key={item.key}
                id={item.key}
                content={item.content}
                date={item.date}
                amount={item.amount}
                option={item.option}
              />
            );
          })}
        {displayedList === "expenses" &&
          fundCtx.expenses.map((item) => {
            return (
              <FundItem
                key={item.key}
                id={item.key}
                content={item.content}
                date={item.date}
                amount={item.amount}
                option={item.option}
              />
            );
          })}
      </div>
    </CardFilled>
  );
};

export default FundsList;
