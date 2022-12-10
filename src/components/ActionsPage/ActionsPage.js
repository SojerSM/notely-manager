import styles from "./ActionsPage.module.css";

import Page from "../UI/Page";
import ActionButton from "./ActionButton";

const ActionsPage = function (props) {
  return (
    <Page>
      <div className={styles.title}>
        Organise your life in a <span>smarter</span> way.
      </div>
      <div className={styles.actions}>
        <ActionButton type={"funds"} title={"Funds"} onClick={props.onClick} />
        <ActionButton type={"dates"} title={"Dates"} onClick={props.onClick} />
        <ActionButton type={"lists"} title={"Lists"} onClick={props.onClick} />
      </div>
    </Page>
  );
};

export default ActionsPage;
