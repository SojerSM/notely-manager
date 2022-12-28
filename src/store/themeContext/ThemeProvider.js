import { useState, useEffect } from "react";

import ThemeContext from "./theme-context";

const ThemeProvider = function (props) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.style.backgroundColor = `var(--${theme}__gray-medium-light)`;
  }, [theme]);

  const toggleTheme = () => {
    theme === "dark" && setTheme("light");
    theme === "light" && setTheme("dark");
  };

  const themeContext = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
