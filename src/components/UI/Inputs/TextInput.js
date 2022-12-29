import { useContext } from "react";

import styles from "./TextInput.module.css";

import ThemeContext from "../../../store/themeContext/theme-context";

const TextInput = function (props) {
  const { theme, defaultFontColor } = useContext(ThemeContext);

  const bcgInput = `var(--${theme}__gray-forms)`;

  const inputHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  return (
    <input
      className={`${styles["input"]} ${props.className}`}
      style={{ backgroundColor: bcgInput, color: defaultFontColor }}
      type="text"
      {...props.input}
      onChange={inputHandler}
      value={props.value}
    />
  );
};

export default TextInput;
