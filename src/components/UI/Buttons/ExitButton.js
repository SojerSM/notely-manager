import { Fragment } from "react";

import styles from "./ExitButton.module.css";
import * as icons from "../../../assets/icons";

const ExitButton = function (props) {
  return (
    <Fragment>
      <svg
        className={styles["svg-icon"]}
        viewBox="0 0 20 20"
        onClick={props.onClose}
      >
        {icons.exitIcon}
      </svg>
    </Fragment>
  );
};

export default ExitButton;
