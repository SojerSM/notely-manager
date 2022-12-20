import styles from "./SummaryPanel.module.css";

import Panel from "../../UI/Panel";
import YearSummary from "./YearSummary/YearSummary";

const SummaryPanel = function (props) {
  return (
    <Panel>
      <h4 className={styles["title"]}>Summary</h4>
      <YearSummary />
    </Panel>
  );
};

export default SummaryPanel;
