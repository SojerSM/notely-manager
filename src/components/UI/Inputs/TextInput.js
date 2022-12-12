import styles from "./TextInput.module.css";

const TextInput = function (props) {
  return (
    <input
      className={`${styles["input"]} ${props.className}`}
      type="text"
      {...props.input}
    />
  );
};

export default TextInput;
