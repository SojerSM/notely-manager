import { useState } from "react";

import styles from "./App.module.css";

import TaskProvider from "./store/taskContext/TaskProvider";
import FundProvider from "./store/fundContext/FundProvider";
import ThemeProvider from "./store/themeContext/ThemeProvider";

import Navigation from "./components/Navigation/Navigation";
import ActionsPage from "./components/ActionsPage/ActionsPage";
import NotesPage from "./components/FundsPage/FundsPage";
import TasksPage from "./components/TasksPage/TasksPage";

const App = function () {
  const [displayedPage, setDisplayedPage] = useState("summary");

  const changeDisplayedPage = (title) => {
    setDisplayedPage(title);
  };

  return (
    <ThemeProvider>
      <TaskProvider>
        <FundProvider>
          <div className={styles.app}>
            <Navigation onClick={changeDisplayedPage} />
            {displayedPage === "summary" && (
              <ActionsPage onClick={changeDisplayedPage} />
            )}
            {displayedPage === "funds" && <NotesPage />}
            {displayedPage === "tasks" && <TasksPage />}
          </div>
        </FundProvider>
      </TaskProvider>
    </ThemeProvider>
  );
};

export default App;
