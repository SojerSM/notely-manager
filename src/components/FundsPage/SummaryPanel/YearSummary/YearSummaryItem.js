import styles from "./YearSummaryItem.module.css";

const YearSummaryItem = function (props) {
  const iconColor = `var(--${props.theme}__UI-icon)`;
  const descriptionColor =
    props.theme === "dark"
      ? "var(--dark__font-light-smoked)"
      : "var(--light__font-dark-smoked)";

  return (
    <div className={styles["wrapper"]}>
      <svg
        className={styles["svg-icon"]}
        style={{ fill: iconColor }}
        viewBox="0 0 20 20"
      >
        {props.icon}
      </svg>
      <h6>{props.value}$</h6>
      <p style={{ color: descriptionColor }}>{props.description}</p>
    </div>
  );
};

export default YearSummaryItem;
