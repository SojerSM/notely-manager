import styles from "./IncomeSelector.module.css";

const FundsSelector = function (props) {
  const selectHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  const bcgSelector = `var(--${props.theme}__gray-forms)`;

  return (
    <select
      className={styles["selector"]}
      style={{ backgroundColor: bcgSelector }}
      name={"categories"}
      value={props.value}
      onChange={selectHandler}
    >
      <option value={"others"}>Others</option>
      <option value={"salary"}>Salary</option>
      <option value={"interest"}>Interest</option>
      <option value={"resale"}>Resale</option>
      <option value={"capital"}>Capital</option>
    </select>
  );
};

export default FundsSelector;
