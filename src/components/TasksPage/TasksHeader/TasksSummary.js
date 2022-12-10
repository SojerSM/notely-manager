import { Fragment } from "react";

import styles from "./TasksSummary.module.css";

import SummaryButton from "./SummaryButton";

const TasksSummary = function (props) {
  return (
    <Fragment>
      <h3 className={styles.title}>Your Tasks</h3>
      <div className={styles.summary}>
        <SummaryButton title={"All"} />
        <SummaryButton title={"Important"} />
        <SummaryButton title={"Upcoming"} />
        <SummaryButton title={"Goals"} />
      </div>
    </Fragment>
  );
};

export default TasksSummary;
