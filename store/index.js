import { configure } from "mobx";
import { useStaticRendering } from "mobx-react-lite";
import { CounterStore } from "./counter-store";
import { ThemeStore } from "./theme-store";
import { UserStore } from "./user-store";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);
configure({
  enforceActions: "always"
});

export { CounterStore, ThemeStore, UserStore };
