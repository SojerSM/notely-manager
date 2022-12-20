import styles from "./SummaryPanel.module.css";

import Panel from "../../UI/Panel";
import YearSummary from "./YearSummary/YearSummary";
import CircleDiagram from "./CircleDiagram/PieChart";

const SummaryPanel = function (props) {
  return (
    <Panel className={styles["panel"]}>
      <h4 className={styles["title"]}>Summary</h4>
      <YearSummary />
      <CircleDiagram />
    </Panel>
  );
};

export default SummaryPanel;
