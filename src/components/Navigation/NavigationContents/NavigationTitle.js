import styles from "./NavigationTitle.module.css";

const NavigationTitle = function (props) {
  const titleClasses = `${styles.title} ${
    props.isExpanded && styles["title-expanded"]
  }`;

  return (
    <h2 className={titleClasses}>
      Strict<span>ly</span>
    </h2>
  );
};

export default NavigationTitle;
