import styles from "./SummaryPanel.module.css";

import Panel from "../../UI/Panel";

const SummaryPanel = function (props) {
  return (
    <Panel>
      <h4 className={styles["title"]}>Summary</h4>
    </Panel>
  );
};

export default SummaryPanel;
