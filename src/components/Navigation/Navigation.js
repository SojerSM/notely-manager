import { useState } from "react";

import styles from "./Navigation.module.css";

import SpreadButton from "./NavButtons/SpreadButton";

const Navigation = function (condition) {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = (event) => {
    event.preventDefault();
    !isExpanded ? setIsExpanded(true) : setIsExpanded(false);
  };

  return (
    <nav className={`${styles.nav} ${isExpanded && styles["nav-expanded"]}`}>
      <SpreadButton onClick={expandHandler} />
    </nav>
  );
};

export default Navigation;
