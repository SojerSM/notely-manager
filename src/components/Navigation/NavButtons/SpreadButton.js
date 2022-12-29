import { useState } from "react";

import styles from "./SpreadButton.module.css";

import * as icons from "../../../assets/icons";

const SpreadButton = function (props) {
  const [isFocused, setIsFocused] = useState(false);

  const classes = `${styles["svg-icon"]} ${
    props.isExpanded ? styles["svg-icon-left"] : styles["svg-icon-right"]
  }`;

  const bcgColor = `var(--${props.theme}__gray-forms)`;

  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      style={{
        backgroundColor: isFocused ? "var(--dark__UI-icon)" : bcgColor,
      }}
      onMouseOver={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      <svg className={classes} viewBox="0 0 20 20">
        {props.isExpanded
          ? icons.toggleLeftIconPath
          : icons.toggleRightIconPath}
      </svg>
    </button>
  );
};

export default SpreadButton;
