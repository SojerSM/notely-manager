import styles from "./ExpenseSelector.module.css";

const FundsSelector = function (props) {
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
      <option value={"fixed"}>Fixed</option>
      <option value={"bills"}>Bills</option>
      <option value={"grocery"}>Grocery</option>
      <option value={"transport"}>Transport</option>
      <option value={"clothes"}>Clothes</option>
      <option value={"medicines"}>Medicines</option>
      <option value={"meetings"}>Meetings</option>
      <option value={"events"}>Events</option>
    </select>
  );
};

export default FundsSelector;
