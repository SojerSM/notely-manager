import { useState } from "react";

import styles from "./App.module.css";

import Navigation from "./components/Navigation/Navigation";
import ActionsPage from "./components/ActionsPage/ActionsPage";

const App = function () {
  const [displayedPage, setDisplayedPage] = useState("dashboard");

  const changeDisplayedPage = (title) => {
    setDisplayedPage(title);
    console.log(displayedPage);
  };

  return (
    <div className={styles.app}>
      <Navigation onClick={changeDisplayedPage} />
      <ActionsPage onClick={changeDisplayedPage} />
    </div>
  );
};

export default App;
