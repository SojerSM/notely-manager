import { useState, useEffect } from "react";

import ThemeContext from "./theme-context";

const ThemeProvider = function (props) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "var(--dark__gray-medium-light)";
    }
    if (theme === "light") {
      document.body.style.backgroundColor = "var(--light__gray-light)";
    }
  }, [theme]);

  const toggleTheme = () => {
    theme === "dark" && setTheme("light");
    theme === "light" && setTheme("dark");
  };

  const themeContext = {
    theme,
    toggleTheme,
  };

  console.log(theme);

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
