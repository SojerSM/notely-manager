import styles from "./TaskCalendarDayItem.module.css";

const TaskCalendarDayItem = function (props) {
  const dateHandler = (event) => {
    event.preventDefault();
    console.log(props.date);
  };

  return (
    <button className={styles["wrapper"]} onClick={dateHandler}>
      <div className={styles["day"]}>
        <h5>{props.day}</h5>
      </div>
    </button>
  );
};

export default TaskCalendarDayItem;
