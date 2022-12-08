import styles from "./ActionButton.module.css";

import Card from "../UI/Card";

const ActionButton = function (props) {
  return (
    <Card className={styles.wrapper}>
      <button>{props.children}</button>
    </Card>
  );
};

export default ActionButton;
