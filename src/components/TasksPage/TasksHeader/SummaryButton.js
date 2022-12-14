import styles from "./SummaryButton.module.css";

const SummaryButton = function (props) {
  return (
    <button className={styles.button}>
      <div className={styles.badge}>{props.amount}</div>
      <p>{props.title}</p>
    </button>
  );
};

export default SummaryButton;
