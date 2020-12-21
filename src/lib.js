// @flow
/** @jsx h */

import { createContext, useContext, useState } from "react";

import type { ElementType } from "react";
import { h } from "preact";

type Themes = {
  [key: string]: {}
};
type Options = {
  theme: {} | Themes,
  default?: string,
  children: {}
};

const context = createContext({
  currentTheme: {},
  setTheme: () => undefined
});

export default function ThemeProvider(props: Options): ElementType {
  const [current, setCurrent] = useState(props.default);

  return (
    <context.Provider
      value={
        props.default
          ? {
              currentTheme: props.theme[props.default],
              setTheme: (key: string) => setCurrent(key)
            }
          : {
              currentTheme: props.theme,
              setTheme: (key: string) =>
                console.warn(`Cannot set theme '${key}'`)
            }
      }>
      {props.children}
    </context.Provider>
  );
}

export const useTheme = (): [any, (key: string) => any] => {
  const theme = useContext(context);

  return [theme.currentTheme, theme.setTheme];
};
