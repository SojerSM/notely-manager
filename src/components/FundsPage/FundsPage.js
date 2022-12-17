import styles from "./FundsPage.module.css";

import Page from "../UI/Page";
import SummaryPanel from "./SummaryPanel/SummaryPanel";

const NotesPage = function (props) {
  return (
    <Page className={styles["page"]}>
      <div className={styles["tracker"]}>Tracker</div>
      <SummaryPanel />
    </Page>
  );
};

export default NotesPage;
