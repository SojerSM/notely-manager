import styles from "./Highlight.module.css";

const Highlight = function (props) {
  return <span className={styles["highlighted"]}>{props.children}</span>;
};

export default Highlight;
