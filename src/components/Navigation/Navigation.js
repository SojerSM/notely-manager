import { useState, useContext } from "react";

import styles from "./Navigation.module.css";

import ThemeContext from "../../store/themeContext/theme-context";

import SpreadButton from "./NavButtons/SpreadButton";
import TogglePageButton from "./NavButtons/TogglePageButton";
import NavigationTitle from "./NavigationContents/NavigationTitle";
import NavigationFooter from "./NavigationContents/NavigationFooter";
import ThemeButton from "./NavButtons/ThemeButton";

const Navigation = function (props) {
  const { theme } = useContext(ThemeContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const bcgColor = `var(--${theme}__gray-dark)`;
  const color = "var(--dark__font-light)";

  const expandHandler = (event) => {
    event.preventDefault();
    !isExpanded ? setIsExpanded(true) : setIsExpanded(false);
  };

  return (
    <nav
      className={`${styles.nav} ${isExpanded && styles["nav-expanded"]}`}
      style={{ backgroundColor: bcgColor, color: color }}
    >
      <NavigationTitle isExpanded={isExpanded} theme={theme} />
      <SpreadButton
        onClick={expandHandler}
        isExpanded={isExpanded}
        theme={theme}
      />
      <div className={styles.togglers}>
        <TogglePageButton
          content={"Summary"}
          type={"summary"}
          isExpanded={isExpanded}
          onClick={props.onClick}
          theme={theme}
        />
        <TogglePageButton
          content={"Funds"}
          type={"funds"}
          isExpanded={isExpanded}
          onClick={props.onClick}
          theme={theme}
        />
        <TogglePageButton
          content={"Tasks"}
          type={"tasks"}
          isExpanded={isExpanded}
          onClick={props.onClick}
          theme={theme}
        />
      </div>
      <ThemeButton />
      <NavigationFooter isExpanded={isExpanded} />
    </nav>
  );
};

export default Navigation;
