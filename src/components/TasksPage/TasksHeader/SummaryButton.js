import styles from "./SummaryButton.module.css";

const SummaryButton = function (props) {
  const changeSummaryHandler = (event) => {
    event.preventDefault();
    props.tasksCtx.changeDisplayedList(props.id);
  };

  return (
    <button className={styles.button} onClick={changeSummaryHandler}>
      <div className={styles.badge}>{props.amount}</div>
      <p>{props.title}</p>
    </button>
  );
};

export default SummaryButton;
