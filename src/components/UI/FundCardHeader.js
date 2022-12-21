import styles from "./FundCardHeader.module.css";

const FundCardHeader = function (props) {
  return (
    <div className={styles["header"]}>
      <h4>{props.children}</h4>
    </div>
  );
};

export default FundCardHeader;
