import styles from "./NavigationTitle.module.css";

const NavigationTitle = function (props) {
  const spanColor = `var(--${props.theme}__UI-title-span)`;

  const titleClasses = `${styles.title} ${
    props.isExpanded && styles["title-expanded"]
  }`;

  return (
    <h2 className={titleClasses}>
      Strict<span style={{ color: spanColor }}>ly</span>
    </h2>
  );
};

export default NavigationTitle;
