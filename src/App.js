import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "./themes/darkMode";
import lightTheme from "./themes/lightMode";
import Home from "./app/Container";
import Button from "./components/Button";
import { AppWrapper } from "./Containers/AppWrapper";
import "./App.css";
import { Footer, Header } from "./components/Button/Header";
export default function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className="App">
        <Header>
          <Button
            style={{ margin: 0 }}
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              localStorage.setItem("isDarkMode", !isDarkMode);
            }}
          >
            Toggle Dark Mode
          </Button>
        </Header>
        <AppWrapper>
          <Home />
        </AppWrapper>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
