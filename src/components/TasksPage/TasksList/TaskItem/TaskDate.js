import styles from "./TaskDate.module.css";

const TaskDate = function (props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className={styles["date"]}>
      <span>{+day.charAt(0) === 0 ? day.slice(1) : day}</span>
      <span>{month.slice(0, 3)}</span>
      <span>{year}</span>
    </div>
  );
};

export default TaskDate;
