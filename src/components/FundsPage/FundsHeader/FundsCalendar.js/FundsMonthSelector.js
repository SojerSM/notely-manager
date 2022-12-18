import styles from "./FundsMonthSelector.module.css";

const FundsMonthSelector = function (props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const selectHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  return (
    <div className={styles["wrapper"]}>
      <p>Month</p>
      <select
        className={styles["selector"]}
        name={"fund-month"}
        value={props.value}
        onChange={selectHandler}
      >
        {months.map((month, index) => {
          return (
            <option key={month} value={index}>
              {month}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FundsMonthSelector;
