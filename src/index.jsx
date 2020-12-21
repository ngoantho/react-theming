// @flow
/** @jsx h */

import { Fragment, h, render } from "preact";
import ThemeProvider, { useTheme } from "./lib";

import React from "react";

function App() {
  const [theme] = useTheme();

  return (
    <>
      <strong>Current theme: {theme.msg}</strong>
      <br />
      <em>{theme.num}</em>
    </>
  );
}

render(
  <ThemeProvider
    theme={{
      msg: "light",
      num: 42
    }}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
