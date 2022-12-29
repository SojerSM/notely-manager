import styles from "./TaskSelector.module.css";

const TaskSelector = function (props) {
  const selectHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  const bcgSelector = `var(--${props.theme}__gray-forms)`;

  return (
    <select
      className={styles["selector"]}
      name={"categories"}
      value={props.value}
      onChange={selectHandler}
      style={{ backgroundColor: bcgSelector }}
    >
      <option value={"others"}>Others</option>
      <option value={"work"}>Work</option>
      <option value={"learning"}>Learning</option>
      <option value={"self-care"}>Self care</option>
      <option value={"payments"}>Payments</option>
      <option value={"events"}>Events</option>
    </select>
  );
};

export default TaskSelector;
