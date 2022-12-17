import React from "react";

const FundContext = React.createContext({
  incomes: [],
  expenses: [],
  addFund: (fund) => {},
});

export default FundContext;
