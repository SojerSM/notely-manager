import styles from "./Navigation.module.css";

import NavigationIcon from "./SpreadButton";

const Navigation = function (props) {
  return (
    <nav className={styles.nav}>
      <NavigationIcon />
    </nav>
  );
};

export default Navigation;
