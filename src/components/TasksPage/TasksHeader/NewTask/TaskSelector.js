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
      onChange={selectHandler}
    >
      <option value={"work"}>Work</option>
      <option value={"learning"}>Learning</option>
      <option value={"self-care"}>Self care</option>
      <option value={"people"}>People</option>
      <option value={"others"}>Others</option>
    </select>
  );
};

export default TaskSelector;
