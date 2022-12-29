import styles from "./NewTaskError.module.css";

import * as icons from "../../../../assets/icons";

const NewTaskError = function (props) {
  const errColor = `var(--${props.theme}__red-error)`;

  return (
    <div className={styles["error"]}>
      <svg
        className={styles["svg-icon"]}
        style={{ fill: errColor }}
        viewBox="0 0 20 20"
      >
        {icons.errorIcon}
      </svg>
      <p style={{ color: errColor }}>{props.formError.description}</p>
    </div>
  );
};

export default NewTaskError;
