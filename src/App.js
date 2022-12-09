import { useState } from "react";

import styles from "./App.module.css";

import Navigation from "./components/Navigation/Navigation";
import ActionsPage from "./components/ActionsPage/ActionsPage";
import NotesPage from "./components/NotesPage/NotesPage";

const App = function () {
  const [displayedPage, setDisplayedPage] = useState("dashboard");

  const changeDisplayedPage = (title) => {
    setDisplayedPage(title);
    console.log(displayedPage);
  };

  return (
    <div className={styles.app}>
      <Navigation onClick={changeDisplayedPage} />
      {displayedPage === "dashboard" && (
        <ActionsPage onClick={changeDisplayedPage} />
      )}
      {displayedPage === "notes" && <NotesPage />}
    </div>
  );
};

export default App;
