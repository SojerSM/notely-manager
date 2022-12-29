import { useContext } from "react";

import styles from "./FundCardHeader.module.css";

import ThemeContext from "../../store/themeContext/theme-context";

const FundCardHeader = function (props) {
  const { theme, defaultFontColor } = useContext(ThemeContext);

  const bcgColor = `var(--${theme}__gray-dark)`;

  return (
    <div
      className={`${styles["header"]} ${[props.className]}`}
      style={{ backgroundColor: bcgColor, color: defaultFontColor }}
    >
      <h4>{props.children}</h4>
    </div>
  );
};

export default FundCardHeader;
