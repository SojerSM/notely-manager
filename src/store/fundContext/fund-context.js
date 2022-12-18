import React from "react";

const FundContext = React.createContext({
  incomes: [],
  expenses: [],
  addFund: (fund) => {},
  removeFund: (key) => {},
});

export default FundContext;
