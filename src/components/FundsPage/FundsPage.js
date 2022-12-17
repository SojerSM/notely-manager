import styles from "./FundsPage.module.css";

import Page from "../UI/Page";
import SummaryPanel from "./SummaryPanel/SummaryPanel";
import FundsHeader from "./FundsHeader/FundsHeader";

const NotesPage = function (props) {
  return (
    <Page className={styles["page"]}>
      <div className={styles["tracker"]}>
        <FundsHeader />
      </div>
      <SummaryPanel />
    </Page>
  );
};

export default NotesPage;
