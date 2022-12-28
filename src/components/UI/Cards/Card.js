import { useContext, useState } from "react";

import ThemeContext from "../../../store/themeContext/theme-context";

import styles from "./Card.module.css";

const Card = function (props) {
  const { theme } = useContext(ThemeContext);
  const [isFocused, setIsFocused] = useState(false);

  const bcgColor = `var(--${theme}__gray-light)`;

  return (
    <div
      className={`${styles.card} ${props.className}`}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      style={{
        outline: `2px solid ${bcgColor}`,
        backgroundColor: isFocused ? bcgColor : "",
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
