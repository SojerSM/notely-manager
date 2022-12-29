import { useContext } from "react";

import styles from "./Highlight.module.css";

import ThemeContext from "../../store/themeContext/theme-context";

const Highlight = function (props) {
  const { theme } = useContext(ThemeContext);

  const gradient = {
    color: theme === "dark" ? "rgba(225, 188, 40, 1)" : "rgba(255, 216, 36, 1)",
    image:
      theme === "dark"
        ? `linear-gradient(115deg, rgba(225, 188, 40, 1) 0%, rgba(221, 128, 80, 1) 100%)`
        : `linear-gradient(115deg, rgba(248, 219, 77, 1) 0%, rgba(188, 145, 52, 1) 100%)`,
  };

  return (
    <span
      className={styles["highlighted"]}
      style={{
        backgroundColor: gradient.color,
        backgroundImage: gradient.image,
      }}
    >
      {props.children}
    </span>
  );
};

export default Highlight;
