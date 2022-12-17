import styles from "./AddButton.module.css";
import * as icons from "../../../assets/icons";

import Button from "./Button";

const AddButton = function (props) {
  return (
    <Button className={styles["add-button"]} onClick={props.onClick}>
      <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
        {icons.addNewIcon}
      </svg>
      Add
    </Button>
  );
};

export default AddButton;
