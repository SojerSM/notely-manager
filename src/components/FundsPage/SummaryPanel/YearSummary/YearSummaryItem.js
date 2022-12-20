import styles from "./YearSummaryItem.module.css";

const YearSummaryItem = function (props) {
  return (
    <div className={styles["wrapper"]}>
      <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
        {props.icon}
      </svg>
      <h6>{props.value}$</h6>
    </div>
  );
};

export default YearSummaryItem;
