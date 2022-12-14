import { useState } from "react";

import styles from "./App.module.css";

import TaskProvider from "./store/taskContext/TaskProvider";

import Navigation from "./components/Navigation/Navigation";
import ActionsPage from "./components/ActionsPage/ActionsPage";
import NotesPage from "./components/FundsPage/FundsPage";
import DatesPage from "./components/DatesPage/DatesPage";
import TasksPage from "./components/TasksPage/TasksPage";

const App = function () {
  const [displayedPage, setDisplayedPage] = useState("summary");

  const changeDisplayedPage = (title) => {
    setDisplayedPage(title);
  };

  return (
    <TaskProvider>
      <div className={styles.app}>
        <Navigation onClick={changeDisplayedPage} />
        {displayedPage === "summary" && (
          <ActionsPage onClick={changeDisplayedPage} />
        )}
        {displayedPage === "funds" && <NotesPage />}
        {displayedPage === "dates" && <DatesPage />}
        {displayedPage === "tasks" && <TasksPage />}
      </div>
    </TaskProvider>
  );
};

export default App;
