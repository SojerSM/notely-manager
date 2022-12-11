import { Fragment } from "react";

import * as icons from "../../../assets/icons";
import styles from "./TasksSummary.module.css";

import Button from "../../UI/Button";
import SummaryButton from "./SummaryButton";

const TasksSummary = function (props) {
  return (
    <Fragment>
      <div className={styles.header}>
        <h3 className={styles.title}>Your Tasks</h3>
        <Button className={styles["add-button"]}>
          <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
            {icons.addNewIcon}
          </svg>
          Add
        </Button>
      </div>
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
