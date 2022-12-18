import styles from "./GeneralFundData.module.css";

import CardFilled from "../../../UI/Cards/CardFilled";
import GeneralFundItem from "./GeneralFundItem";

const GeneralFundData = function (props) {
  return (
    <CardFilled className={styles["general"]}>
      <div className={styles["header"]}>
        <h4>General Overview</h4>
      </div>
      <div className={styles["overview"]}>
        <GeneralFundItem />
        <GeneralFundItem />
        <GeneralFundItem />
      </div>
    </CardFilled>
  );
};

export default GeneralFundData;
