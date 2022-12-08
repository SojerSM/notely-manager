import styles from "./SpreadButton.module.css";

import * as icons from "../../../assets/icons";

const SpreadButton = function (props) {
  const classes = `${styles["svg-icon"]} ${
    props.isExpanded ? styles["svg-icon-left"] : styles["svg-icon-right"]
  }`;

  return (
    <button className={styles.button} onClick={props.onClick}>
      <svg className={classes} viewBox="0 0 20 20">
        {props.isExpanded
          ? icons.toggleLeftIconPath
          : icons.toggleRightIconPath}
      </svg>
    </button>
  );
};

export default SpreadButton;
