import styles from "./FundItemDate.module.css";

const FundItemDate = function (props) {
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date
    .toLocaleString("en-US", { month: "long" })
    .slice(0, 3);

  const bcgDate = `var(--${props.theme}__gray-medium-dark)`;
  const dateOutline = `2px solid var(--${props.theme}__gray-forms)`;

  return (
    <div
      className={styles["date"]}
      style={{ backgroundColor: bcgDate, outline: dateOutline }}
    >
      <p className={styles["day-month"]}>
        {day.charAt(0) === "0" ? day.slice(1) : day} {month}
      </p>

      <p className={styles["year"]}>{year}</p>
    </div>
  );
};

export default FundItemDate;
