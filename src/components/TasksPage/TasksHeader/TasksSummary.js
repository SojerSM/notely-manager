import { Fragment } from "react";

import styles from "./TasksSummary.module.css";

const TasksSummary = function (props) {
  return (
    <Fragment>
      <h3 className={styles.title}>Your Tasks</h3>
      <div className={styles.summary}>
        <button>All</button>
        <button>Important</button>
        <button>Upcoming</button>
        <button>Goals</button>
      </div>
    </Fragment>
  );
};

export default TasksSummary;
