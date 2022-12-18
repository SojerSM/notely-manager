import React from "react";

const FundContext = React.createContext({
  funds: [],
  addFund: (fund) => {},
  removeFund: (key) => {},
});

export default FundContext;
