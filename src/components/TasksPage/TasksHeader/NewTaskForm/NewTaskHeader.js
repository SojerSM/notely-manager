import styles from "./NewTaskHeader.module.css";

const NewTaskHeader = function (props) {
  return (
    <div className={styles["form-header"]}>
      <h4>Create new</h4>
    </div>
  );
};

export default NewTaskHeader;
