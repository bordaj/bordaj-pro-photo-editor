import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "./themes/darkMode";
import lightTheme from "./themes/lightMode";
import Home from "./app/Container";
import { AppWrapper } from "./Containers/AppWrapper";
import "./App.css";
import {
  Footer,
  Header,
  HeaderTitle,
  SwitchContainer,
} from "./components/Header";
import Switch from "react-switch";
export default function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className="App">
        <Header style={{ display: "flex", justifyContent: "space-between" }}>
          <HeaderTitle>EDITOR PRO</HeaderTitle>
          <SwitchContainer>
            <Switch
              checked={isDarkMode}
              onChange={() => {
                setIsDarkMode(!isDarkMode);
                localStorage.setItem("isDarkMode", !isDarkMode);
              }}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor="#d08770"
              onHandleColor="#2E3440"
              offHandleColor="#ECEFF4"
              offColor="#5E81AC"
            />
          </SwitchContainer>
        </Header>
        <AppWrapper>
          <Home />
        </AppWrapper>
        <Footer>
          <HeaderTitle>
            Developed by Jeel Borda & Powered by&nbsp;
            <span>
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  textDecorationLine: "underline",
                }}
                href="http://camanjs.com/"
              >
                camanJs
              </a>
            </span>
          </HeaderTitle>
        </Footer>
      </div>
    </ThemeProvider>
  );
}
