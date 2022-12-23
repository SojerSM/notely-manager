import { useContext } from "react";

import styles from "./ActionsPage.module.css";

import TaskContext from "../../store/taskContext/task-context";
import FundContext from "../../store/fundContext/fund-context";

import Page from "../UI/Page";
import ActionButton from "./ActionButton";
import Highlight from "../UI/Highlight";

const ActionsPage = function (props) {
  const { tasks } = useContext(TaskContext);
  const { funds } = useContext(FundContext);

  return (
    <Page>
      <div className={styles.title}>
        Organise your life in a <Highlight>smarter</Highlight> way.
      </div>
      <div className={styles.actions}>
        <ActionButton
          type={"funds"}
          title={"Funds"}
          amount={funds.length}
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
