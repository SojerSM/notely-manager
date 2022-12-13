import styles from "./NewTaskError.module.css";

import * as icons from "../../../../assets/icons";

const NewTaskError = function (props) {
  return (
    <div className={styles["error"]}>
      <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
        {icons.errorIcon}
      </svg>
      <p>{props.formError.description}</p>
    </div>
  );
};

export default NewTaskError;
