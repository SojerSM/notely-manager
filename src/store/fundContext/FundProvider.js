import { useState, useEffect } from "react";

import FundContext from "./fund-context";

const getInitialValue = () => {
  const initialValue = localStorage.getItem("funds");
  return initialValue ? JSON.parse(initialValue) : [];
};

const FundProvider = function (props) {
  const [funds, setFunds] = useState(getInitialValue);
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [currYear, setCurrYear] = useState(new Date().getFullYear());

  useEffect(() => {
    console.log(funds);
    localStorage.setItem("funds", JSON.stringify(funds));
  }, [funds]);

  const addFund = (fund) => {
    setFunds((prevState) => [
      ...prevState,
      {
        key: fund.key,
        content: fund.content,
        date: fund.date,
        amount: fund.amount,
        option: fund.option,
        type: fund.active,
      },
    ]);
  };

  const removeFund = (key) => {
    const newFunds = funds.filter((fund) => {
      return fund.key !== key;
    });
    setFunds(newFunds);
  };

  const changeMonth = (month) => {
    setCurrMonth(month);
  };

  const changeYear = (year) => {
    setCurrYear(year);
  };

  const fundContext = {
    funds,
    currMonth,
    currYear,
    addFund,
    removeFund,
    changeMonth,
    changeYear,
  };

  console.log(currMonth, currYear);

  return (
    <FundContext.Provider value={fundContext}>
      {props.children}
    </FundContext.Provider>
  );
};

export default FundProvider;
