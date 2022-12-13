import styles from "./DateInput.module.css";

const DateInput = function (props) {
  const inputHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  return (
    <input
      type="date"
      className={`${styles.input} ${props.className}`}
      {...props.input}
      onChange={inputHandler}
      value={props.value}
    />
  );
};

export default DateInput;
