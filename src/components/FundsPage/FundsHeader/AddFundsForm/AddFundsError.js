import styles from "./AddFundsError.module.css";
import * as icons from "../../../../assets/icons";

const AddFundsError = function (props) {
  const errColor = `var(--${props.theme}__red-error)`;

  return (
    <div className={styles["error"]} style={{ color: errColor }}>
      <svg
        className={styles["svg-icon"]}
        style={{ fill: errColor }}
        viewBox="0 0 20 20"
      >
        {icons.errorIcon}
      </svg>
      <p>{props.formError.description}</p>
    </div>
  );
};

export default AddFundsError;
