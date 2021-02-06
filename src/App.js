import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "./themes/darkMode";
import lightTheme from "./themes/lightMode";
import Home from "./app/Container";
import Button from "./components/Button";
export default function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  return (
    <div className="App">
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Home />
        <Button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            localStorage.setItem("isDarkMode", !isDarkMode);
          }}
        >
          Toggle Dark Mode
        </Button>
      </ThemeProvider>
    </div>
  );
}
