import { useState } from "react";

import FundContext from "./fund-context";

const FundProvider = function (props) {
  const [funds, setFunds] = useState([]);

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

  const fundContext = {
    funds,
    addFund,
    removeFund,
  };

  console.log(funds);

  return (
    <FundContext.Provider value={fundContext}>
      {props.children}
    </FundContext.Provider>
  );
};

export default FundProvider;
