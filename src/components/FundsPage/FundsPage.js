import styles from "./FundsPage.module.css";

import Page from "../UI/Page";
import SummaryPanel from "./SummaryPanel/SummaryPanel";
import FundsHeader from "./FundsHeader/FundsHeader";
import FundsList from "./FundsList/FundsList";
import FundsFooter from "./FundsFooter/FundsFooter";

const NotesPage = function (props) {
  return (
    <Page className={styles["page"]}>
      <div className={styles["tracker"]}>
        <div className={styles["main-tracker"]}>
          <FundsHeader />
          <FundsList />
        </div>
        <FundsFooter />
      </div>
      <SummaryPanel />
    </Page>
  );
};

export default NotesPage;
