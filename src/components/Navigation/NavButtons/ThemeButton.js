import styles from "./ThemeButton.module.css";
import * as icons from "../../../assets/icons";

const ThemeButton = function (props) {
  return (
    <button className={styles["button"]}>
      <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
        {icons.themeIcon}
      </svg>
    </button>
  );
};

export default ThemeButton;
