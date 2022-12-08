import styles from "./App.module.css";

import Navigation from "./components/Navigation/Navigation";
import ActionsPage from "./components/ActionsPage/ActionsPage";

const App = function () {
  return (
    <div className={styles.app}>
      <Navigation />
      <ActionsPage />
    </div>
  );
};

export default App;
