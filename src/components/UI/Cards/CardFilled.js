import { useContext } from "react";

import ThemeContext from "../../../store/themeContext/theme-context";

import styles from "./CardFilled.module.css";

const CardFilled = function (props) {
  const { theme } = useContext(ThemeContext);

  const background = `var(--${theme}__gray-light)`;

  return (
    <div
      className={`${styles["card"]} ${props.className}`}
      style={{ backgroundColor: background }}
    >
      {props.children}
    </div>
  );
};

export default CardFilled;
