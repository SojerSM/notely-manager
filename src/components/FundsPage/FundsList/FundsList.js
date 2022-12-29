import { useState, useContext } from "react";

import styles from "./FundsList.module.css";

import FundContext from "../../../store/fundContext/fund-context";
import ThemeContext from "../../../store/themeContext/theme-context";

import Button from "../../UI/Buttons/Button";
import CardFilled from "../../UI/Cards/CardFilled";
import FundsListToggler from "./FundsListToggler";
import FundItem from "./FundItem/FundItem";

const FundsList = function (props) {
  const { theme, defaultFontColor } = useContext(ThemeContext);
  const fundCtx = useContext(FundContext);

  const [displayedList, setDisplayedList] = useState("incomes");
  const [sortedBy, setSortedBy] = useState("date");

  const changeDisplayedList = (value) => {
    setDisplayedList(value);
  };

  const sortByDateHandler = (event) => {
    event.preventDefault();
    if (sortedBy === "date") return;

    setSortedBy("date");
  };

  const sortByValueHandler = (event) => {
    event.preventDefault();
    if (sortedBy === "value") return;

    setSortedBy("value");
  };

  const renderSortedList = (category) => {
    let list = fundCtx.currMonthFunds.filter((fund) => {
      return fund.type === category;
    });

    if (sortedBy === "date") {
      list.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    }
    if (sortedBy === "value") {
      list.sort((a, b) => {
        return b.amount - a.amount;
      });
    }

    return list.map((item) => {
      return (
        <FundItem
          key={item.key}
          id={item.key}
          content={item.content}
          date={new Date(item.date)}
          amount={item.amount}
          option={item.option}
          type={item.type}
          theme={theme}
          fontColor={defaultFontColor}
        />
      );
    });
  };

  return (
    <CardFilled className={styles["list-wrapper"]}>
      <FundsListToggler
        displayedList={displayedList}
        onChange={changeDisplayedList}
        theme={theme}
        fontColor={defaultFontColor}
      />
      <div className={`${styles["list"]} ${styles[theme]}`}>
        {displayedList === "incomes" && renderSortedList("income")}
        {displayedList === "expenses" && renderSortedList("expense")}
      </div>
      <div
        className={styles["sort-buttons"]}
        style={{ color: defaultFontColor }}
      >
        <p>Sort by</p>
        <Button className={styles["sort"]} onClick={sortByDateHandler}>
          date
        </Button>
        <Button className={styles["sort"]} onClick={sortByValueHandler}>
          value
        </Button>
      </div>
    </CardFilled>
  );
};

export default FundsList;
