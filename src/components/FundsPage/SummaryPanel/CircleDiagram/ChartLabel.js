import styles from "./ChartLabel.module.css";

const ChartLabel = function (props) {
  const percentage = (props.value / props.total) * 100;
  return (
    <div className={styles["label"]}>
      <span
        className={styles["marker"]}
        style={{ background: `${props.color}` }}
      ></span>
      <p>{props.title}</p>
      <div className={styles["percentage"]}>
        <p>{percentage.toFixed(2)}</p>
        <span>%</span>
      </div>
    </div>
  );
};

export default ChartLabel;
