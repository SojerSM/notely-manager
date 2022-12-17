import styles from "./Panel.module.css";

const Panel = function (props) {
  return <div className={styles["panel"]}>{props.children}</div>;
};

export default Panel;
