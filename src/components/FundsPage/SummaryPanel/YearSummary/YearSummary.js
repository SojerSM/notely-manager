import { useContext } from "react";

import styles from "./YearSummary.module.css";

import FundContext from "../../../../store/fundContext/fund-context";

import CardFilled from "../../../UI/Cards/CardFilled";

const YearSummary = function (props) {
  const fundCtx = useContext(FundContext);

  return (
    <CardFilled className={styles["overview"]}>
      <div className={styles["header"]}>
        <h5>{fundCtx.currYear} overview</h5>
      </div>
      <div className={styles["data"]}>
        <div>Data 1</div>
        <div>Data 2</div>
        <div>Data 3</div>
      </div>
    </CardFilled>
  );
};

export default YearSummary;
