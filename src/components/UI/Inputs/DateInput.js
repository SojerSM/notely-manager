import { useContext } from "react";

import styles from "./DateInput.module.css";

import ThemeContext from "../../../store/themeContext/theme-context";

const DateInput = function (props) {
  const { theme, defaultFontColor } = useContext(ThemeContext);

  const bcgInput = `var(--${theme}__gray-forms)`;

  const inputHandler = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  return (
    <input
      type="date"
      className={`${styles.input} ${props.className}`}
      style={{ backgroundColor: bcgInput, color: defaultFontColor }}
      {...props.input}
      onChange={inputHandler}
      value={props.value}
    />
  );
};

export default DateInput;
