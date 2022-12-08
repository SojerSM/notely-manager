import styles from "./TogglePageButton.module.css";
import * as icons from "../../../assets/icons";

const TogglePageButton = function (props) {
  return (
    <button className={styles.button}>
      <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
        {props.type === "note" && icons.navigationNoteIcon}
        {props.type === "task" && icons.navigationTaskIcon}
        {props.type === "list" && icons.navigationListIcon}
      </svg>
    </button>
  );
};

export default TogglePageButton;
