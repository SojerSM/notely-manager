import styles from "./ChartLabel.module.css";

const ChartLabel = function (props) {
  const percentage = (props.value / props.total) * 100;
  const spanColor =
    props.theme === "dark"
      ? "var(--dark__font-light-smoked)"
      : "var(--light__font-dark-smoked)";

  return (
    <div className={styles["label"]}>
      <span
        className={styles["marker"]}
        style={{ background: `${props.color}` }}
      ></span>
      <p>{props.title}</p>
      <div className={styles["percentage"]}>
        <p>{percentage.toFixed(2)}</p>
        <span style={{ color: spanColor }}>%</span>
      </div>
    </div>
  );
};

export default ChartLabel;
