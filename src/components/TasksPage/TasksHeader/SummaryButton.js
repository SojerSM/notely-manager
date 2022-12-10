import styles from "./SummaryButton.module.css";

const SummaryButton = function (props) {
  return (
    <button className={styles.button}>
      <div className={styles.badge}>0</div>
      <p>{props.title}</p>
    </button>
  );
};

export default SummaryButton;
