import styles from "./DateInput.module.css";

const DateInput = function (props) {
  return (
    <input
      type="date"
      className={`${styles.input} ${props.className}`}
      {...props.input}
    />
  );
};

export default DateInput;
