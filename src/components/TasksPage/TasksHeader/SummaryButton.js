import styles from "./SummaryButton.module.css";

const SummaryButton = function (props) {
  const changeSummaryHandler = (event) => {
    event.preventDefault();
    props.tasksCtx.turnOffDisplayingByDate();
    props.tasksCtx.changeDisplayedList(props.id);
  };

  const bcgBadge = `var(--${props.theme}__gray-medium-light)`;
  const badgeClass =
    props.theme === "dark" ? "active-badge-dark" : "active-badge-light";

  const isActive = props.id === props.tasksCtx.displayed;

  return (
    <button className={styles.button} onClick={changeSummaryHandler}>
      <div
        className={`${styles["badge"]} ${isActive && styles[badgeClass]}`}
        style={{ backgroundColor: bcgBadge }}
      >
        {props.amount}
      </div>
      <p>{props.title}</p>
    </button>
  );
};

export default SummaryButton;
