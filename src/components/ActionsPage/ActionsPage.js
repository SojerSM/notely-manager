import styles from "./ActionsPage.module.css";

import ActionButton from "./ActionButton";

const ActionsPage = function (props) {
  return (
    <main className={styles["actions-page"]}>
      <div className={styles.title}>
        Organise your life in a <span>smarter</span> way.
      </div>
      <div className={styles.actions}>
        <ActionButton type={"notes"} title={"Notes"} onClick={props.onClick} />
        <ActionButton type={"tasks"} title={"Tasks"} onClick={props.onClick} />
        <ActionButton type={"lists"} title={"Lists"} onClick={props.onClick} />
      </div>
    </main>
  );
};

export default ActionsPage;
