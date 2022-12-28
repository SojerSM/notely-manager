import { useContext } from "react";

import styles from "./Button.module.css";

import ThemeContext from "../../../store/themeContext/theme-context";

const Button = function (props) {
  const { defaultFontColor, theme } = useContext(ThemeContext);

  const background = `var(--${theme}__UI-green)`;

  return (
    <button
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      id={props.id}
      style={{ color: defaultFontColor, backgroundColor: background }}
    >
      {props.children}
    </button>
  );
};

export default Button;
