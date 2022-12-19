import { useContext } from "react";

import styles from "./GeneralFundData.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

import CardFilled from "../../../UI/Cards/CardFilled";
import GeneralFundItem from "./GeneralFundItem";

const GeneralFundData = function (props) {
  const fundCtx = useContext(FundContext);

  console.log(fundCtx);

  return (
    <CardFilled className={styles["general"]}>
      <div className={styles["header"]}>
        <h4>General Overview</h4>
      </div>
      <div className={styles["overview"]}>
        <GeneralFundItem text={"incomes"} />
        <GeneralFundItem text={"expenses"} />
      </div>
    </CardFilled>
  );
};

export default GeneralFundData;
