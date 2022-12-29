import { useContext } from "react";

import styles from "./FundCardHeader.module.css";

import ThemeContext from "../../store/themeContext/theme-context";

const FundCardHeader = function (props) {
  const { theme, defaultFontColor } = useContext(ThemeContext);

  const bcgColor =
    theme === "dark"
      ? "var(--dark__gray-dark)"
      : "var(--light__gray-medium-dark)";
  const fontColor = defaultFontColor;

  return (
    <div
      className={`${styles["header"]} ${[props.className]}`}
      style={{ backgroundColor: bcgColor, color: fontColor }}
    >
      <h4>{props.children}</h4>
    </div>
  );
};

export default FundCardHeader;
