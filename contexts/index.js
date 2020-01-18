import { CounterStore, ThemeStore, UserStore } from "@store";
import React from "react";

export const storeContext = React.createContext({
  counterStore: new CounterStore(),
  themeStore: new ThemeStore(),
  userStore: new UserStore()
});
