import styles from "./Button.module.css";

const Button = function (props) {
  return (
    <button className={`${styles.button} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
