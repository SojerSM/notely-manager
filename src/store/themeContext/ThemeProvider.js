import { useState } from "react";

import ThemeContext from "./theme-context";

const ThemeProvider = function (props) {
  const [theme, setTheme] = useState("dark");

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
