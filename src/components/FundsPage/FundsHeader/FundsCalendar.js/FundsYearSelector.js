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

  const bcgSelector = `var(--${props.theme}__gray-forms)`;

  const selectHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  return (
    <div className={styles["wrapper"]}>
      <select
        className={styles["selector"]}
        style={{ backgroundColor: bcgSelector }}
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
