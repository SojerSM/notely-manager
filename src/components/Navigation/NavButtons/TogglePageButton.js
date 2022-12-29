import styles from "./TogglePageButton.module.css";
import * as icons from "../../../assets/icons";

const TogglePageButton = function (props) {
  const iconColor =
    props.theme === "dark"
      ? "var(--dark__UI-icon)"
      : "var(--light__UI-icon-light)";

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
      <svg
        className={styles["svg-icon"]}
        style={{ fill: iconColor }}
        viewBox="0 0 20 20"
      >
        {props.type === "summary" && icons.navigationSummaryIcon}
        {props.type === "funds" && icons.navigationFundsIcon}
        {props.type === "tasks" && icons.navigationListIcon}
      </svg>
      <p className={contentClasses}>{props.content}</p>
    </button>
  );
};

export default TogglePageButton;
