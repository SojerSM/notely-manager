import React from "react";

const FundContext = React.createContext({
  funds: [],
  currYear: new Date().getFullYear(),
  currMonth: new Date().getMonth(),
  addFund: (fund) => {},
  removeFund: (key) => {},
  changeMonth: (month) => {},
  changeYear: (year) => {},
});

export default FundContext;
