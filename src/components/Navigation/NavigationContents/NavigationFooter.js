import styles from "./NavigationFooter.module.css";

const NavigationFooter = function (props) {
  const footerClasses = `${styles.footer} ${
    props.isExpanded && styles["footer-expanded"]
  }`;

  return (
    <footer className={footerClasses}>
      <h4>©2022 Sebastian Mazur</h4>
    </footer>
  );
};

export default NavigationFooter;
