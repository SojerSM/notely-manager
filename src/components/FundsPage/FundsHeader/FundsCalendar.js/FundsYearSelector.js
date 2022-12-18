import styles from "./FundsYearSelector.module.css";

const FundsYearSelector = function (props) {
  const years = [
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
  ];

  const selectHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  return (
    <div className={styles["wrapper"]}>
      <p>Year</p>
      <select
        className={styles["selector"]}
        name={"fund-year"}
        value={props.value}
        onChange={selectHandler}
      >
        {years.map((year) => {
          return (
            <option value={year} key={year}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FundsYearSelector;
