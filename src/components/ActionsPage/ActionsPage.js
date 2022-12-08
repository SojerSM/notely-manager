import styles from "./ActionsPage.module.css";

import ActionButton from "./ActionButton";

const ActionsPage = function (props) {
  return (
    <main className={styles["actions-page"]}>
      <div className={styles.title}>
        Organise your life in a <span>smarter</span> way.
      </div>
      <div className={styles.actions}>
        <ActionButton title={"Notes"} />
        <ActionButton title={"Tasks"} />
        <ActionButton title={"Lists"} />
      </div>
    </main>
  );
};

export default ActionsPage;
