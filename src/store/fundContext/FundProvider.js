import { useState } from "react";

import FundContext from "./fund-context";

const FundProvider = function (props) {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addFund = (fund) => {
    if (fund.active === "income") {
      setIncomes((prevState) => [
        ...prevState,
        {
          key: fund.key,
          content: fund.content,
          date: fund.date,
          amount: fund.amount,
          option: fund.option,
        },
      ]);
    }
    if (fund.active === "expense") {
      setExpenses((prevState) => [
        ...prevState,
        {
          key: fund.key,
          content: fund.content,
          date: fund.date,
          amount: fund.amount,
          option: fund.option,
        },
      ]);
    }
  };

  const fundContext = {
    incomes,
    expenses,
    addFund,
  };

  return (
    <FundContext.Provider value={fundContext}>
      {props.children}
    </FundContext.Provider>
  );
};

export default FundProvider;
