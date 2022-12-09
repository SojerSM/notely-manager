import { useState } from "react";

import styles from "./Navigation.module.css";

import SpreadButton from "./NavButtons/SpreadButton";
import TogglePageButton from "./NavButtons/TogglePageButton";

const Navigation = function (condition) {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = (event) => {
    event.preventDefault();
    !isExpanded ? setIsExpanded(true) : setIsExpanded(false);
  };

  return (
    <nav className={`${styles.nav} ${isExpanded && styles["nav-expanded"]}`}>
      <SpreadButton onClick={expandHandler} isExpanded={isExpanded} />
      <div className={styles.togglers}>
        <TogglePageButton
          content={"Dashboard"}
          type={"dashboard"}
          isExpanded={isExpanded}
        />
        <TogglePageButton
          content={"Notes"}
          type={"note"}
          isExpanded={isExpanded}
        />
        <TogglePageButton
          content={"Tasks"}
          type={"task"}
          isExpanded={isExpanded}
        />
        <TogglePageButton
          content={"Lists"}
          type={"list"}
          isExpanded={isExpanded}
        />
      </div>
    </nav>
  );
};

export default Navigation;
