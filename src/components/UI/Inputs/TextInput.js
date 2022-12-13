import styles from "./TextInput.module.css";

const TextInput = function (props) {
  const inputHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  return (
    <input
      className={`${styles["input"]} ${props.className}`}
      type="text"
      {...props.input}
      onChange={inputHandler}
      value={props.value}
    />
  );
};

export default TextInput;
