import { useContext } from "react";

import styles from "./AddButton.module.css";
import * as icons from "../../../assets/icons";

import ThemeContext from "../../../store/themeContext/theme-context";

import Button from "./Button";

const AddButton = function (props) {
  const { theme } = useContext(ThemeContext);

  const iconFill =
    theme === "dark" ? "var(--dark__font-light)" : "var(--light__font-dark)";

  return (
    <Button className={styles["add-button"]} onClick={props.onClick}>
      <svg
        className={styles["svg-icon"]}
        style={{ fill: iconFill }}
        viewBox="0 0 20 20"
      >
        {icons.addNewIcon}
      </svg>
      Add
    </Button>
  );
};

export default AddButton;
