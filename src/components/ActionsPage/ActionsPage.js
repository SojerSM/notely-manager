import styles from "./ActionsPage.module.css";

import ActionButton from "./ActionButton";

const ActionsPage = function (props) {
  return (
    <main className={styles["actions-page"]}>
      <div className={styles.title}>
        Organise your life in a <span>smarter</span> way.
      </div>
      <div>
        <ActionButton>Action 1</ActionButton>
        <ActionButton>Action 2</ActionButton>
        <ActionButton>Action 3</ActionButton>
      </div>
    </main>
  );
};

export default ActionsPage;
