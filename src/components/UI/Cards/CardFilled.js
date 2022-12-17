import styles from "./CardFilled.module.css";

const CardFilled = function (props) {
  return (
    <div className={`${styles["card"]} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default CardFilled;
