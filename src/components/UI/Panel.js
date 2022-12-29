import { useContext } from "react";

import styles from "./Panel.module.css";

import ThemeContext from "../../store/themeContext/theme-context";

const Panel = function (props) {
  const { theme, defaultFontColor } = useContext(ThemeContext);

  const bcgPanel =
    theme === "dark" ? "var(--dark__gray-dark)" : "var(--light__gray-forms)";

  return (
    <div
      className={`${styles["panel"]} ${props.className}`}
      style={{ backgroundColor: bcgPanel, color: defaultFontColor }}
    >
      {props.children}
    </div>
  );
};

export default Panel;
