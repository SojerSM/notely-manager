import { useState } from "react";

import styles from "./Navigation.module.css";

import SpreadButton from "./NavButtons/SpreadButton";
import TogglePageButton from "./NavButtons/TogglePageButton";
import NavigationTitle from "./NavigationContents/NavigationTitle";
import NavigationFooter from "./NavigationContents/NavigationFooter";
import ThemeButton from "./NavButtons/ThemeButton";

const Navigation = function (props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = (event) => {
    event.preventDefault();
    !isExpanded ? setIsExpanded(true) : setIsExpanded(false);
  };

  return (
    <nav className={`${styles.nav} ${isExpanded && styles["nav-expanded"]}`}>
      <NavigationTitle isExpanded={isExpanded} />
      <SpreadButton onClick={expandHandler} isExpanded={isExpanded} />
      <div className={styles.togglers}>
        <TogglePageButton
          content={"Summary"}
          type={"summary"}
          isExpanded={isExpanded}
          onClick={props.onClick}
        />
        <TogglePageButton
          content={"Funds"}
          type={"funds"}
          isExpanded={isExpanded}
          onClick={props.onClick}
        />
        <TogglePageButton
          content={"Tasks"}
          type={"tasks"}
          isExpanded={isExpanded}
          onClick={props.onClick}
        />
      </div>
      <ThemeButton />
      <NavigationFooter isExpanded={isExpanded} />
    </nav>
  );
};

export default Navigation;
