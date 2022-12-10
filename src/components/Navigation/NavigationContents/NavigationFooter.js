import styles from "./NavigationFooter.module.css";

const NavigationFooter = function (props) {
  const footerClasses = `${styles.footer} ${
    props.isExpanded && styles["footer-expanded"]
  }`;

  return (
    <footer className={footerClasses}>
      <p>©2022 Sebastian Mazur</p>
    </footer>
  );
};

export default NavigationFooter;
