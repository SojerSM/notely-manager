import styles from "./RemoveDoneButton.module.css";

import Button from "../../UI/Buttons/Button";

const RemoveDoneButton = function (props) {
  return (
    <Button className={styles["button"]} onClick={props.onClick}>
      Remove finished
    </Button>
  );
};

export default RemoveDoneButton;
