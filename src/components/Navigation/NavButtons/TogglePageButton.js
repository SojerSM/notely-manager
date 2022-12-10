import styles from "./TogglePageButton.module.css";
import * as icons from "../../../assets/icons";

const TogglePageButton = function (props) {
  const btnClasses = `${styles.button} ${
    props.isExpanded && styles["button-expanded"]
  }`;

  const contentClasses = `${styles.content} ${
    props.isExpanded && styles["content-expanded"]
  }`;

  const togglePageHandler = (event) => {
    event.preventDefault();
    props.onClick(props.type);
  };

  return (
    <button className={btnClasses} onClick={togglePageHandler}>
      <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
        {props.type === "dashboard" && icons.navigationDashboardIcon}
        {props.type === "funds" && icons.navigationNoteIcon}
        {props.type === "dates" && icons.navigationTaskIcon}
        {props.type === "lists" && icons.navigationListIcon}
      </svg>
      <p className={contentClasses}>{props.content}</p>
    </button>
  );
};

export default TogglePageButton;
