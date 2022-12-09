import styles from "./ActionButton.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const ActionButton = function (props) {
  const togglePageHandler = (event) => {
    event.preventDefault();
    props.onClick(props.type);
  };

  return (
    <Card className={styles.wrapper}>
      <p>0</p>
      <Button className={styles.button} onClick={togglePageHandler}>
        {props.title}
      </Button>
    </Card>
  );
};

export default ActionButton;
