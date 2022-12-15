import styles from "./TaskSelector.module.css";

const TaskSelector = function (props) {
  const selectHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  return (
    <select
      className={styles["selector"]}
      name={"categories"}
      value={props.value}
      onChange={selectHandler}
    >
      <option value={"others"}>Others</option>
      <option value={"work"}>Work</option>
      <option value={"learning"}>Learning</option>
      <option value={"self-care"}>Self care</option>
      <option value={"people"}>People</option>
    </select>
  );
};

export default TaskSelector;
