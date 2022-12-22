import { useContext } from "react";

import styles from "./ActionsPage.module.css";

import TaskContext from "../../store/taskContext/task-context";

import Page from "../UI/Page";
import ActionButton from "./ActionButton";
import Highlight from "../UI/Highlight";

const ActionsPage = function (props) {
  const { tasks } = useContext(TaskContext);

  return (
    <Page>
      <div className={styles.title}>
        Organise your life in a <Highlight>smarter</Highlight> way.
      </div>
      <div className={styles.actions}>
        <ActionButton
          type={"funds"}
          title={"Funds"}
          amount={0}
          onClick={props.onClick}
        />
        <ActionButton
          type={"tasks"}
          title={"Tasks"}
          amount={tasks.length}
          onClick={props.onClick}
        />
      </div>
    </Page>
  );
};

export default ActionsPage;
