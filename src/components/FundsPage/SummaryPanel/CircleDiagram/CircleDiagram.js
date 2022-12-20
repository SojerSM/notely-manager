import styles from "./CircleDiagram.module.css";

import PieChart from "./PieChart";

const CircleDiagram = function (props) {
  return (
    <CardFilled className={styles["diagram"]}>
      <div className={styles["header"]}>
        <h5>{fundCtx.currYear} overview</h5>
        <PieChart />
      </div>
    </CardFilled>
  );
};

export default CircleDiagram;
