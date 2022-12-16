import styles from "./SummaryButton.module.css";

const SummaryButton = function (props) {
  const changeSummaryHandler = (event) => {
    event.preventDefault();
    props.tasksCtx.turnOffDisplayingByDate();
    props.tasksCtx.changeDisplayedList(props.id);
  };

  const isActive = props.id === props.tasksCtx.displayed;

  return (
    <button className={styles.button} onClick={changeSummaryHandler}>
      <div
        className={`${styles["badge"]} ${isActive && styles["active-badge"]}`}
      >
        {props.amount}
      </div>
      <p>{props.title}</p>
    </button>
  );
};

export default SummaryButton;
