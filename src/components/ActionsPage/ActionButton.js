import { useContext } from "react";

import styles from "./ActionButton.module.css";

import ThemeContext from "../../store/themeContext/theme-context";

import Card from "../UI/Cards/Card";
import Button from "../UI/Buttons/Button";

const ActionButton = function (props) {
  const { defaultFontColor } = useContext(ThemeContext);

  const togglePageHandler = (event) => {
    event.preventDefault();
    props.onClick(props.type);
  };

  return (
    <Card className={styles.wrapper}>
      <p style={{ color: defaultFontColor }}>{props.amount}</p>
      <Button className={styles.button} onClick={togglePageHandler}>
        {props.title}
      </Button>
    </Card>
  );
};

export default ActionButton;
