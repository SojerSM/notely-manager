import { useState } from "react";

import ThemeContext from "./theme-context";

const ThemeProvider = function (props) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(null); // will be changed
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
