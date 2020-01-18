import { useStores } from "@hooks/use-stores";
import Axios from "axios";
import { observer } from "mobx-react-lite";
import React from "react";

// src/components/Counter.tsx
export const Counter = observer(() => {
  const { counterStore } = useStores();

  return (
    <>
      <div>{counterStore.count}</div>
      <button onClick={() => counterStore.increment()}>++</button>
      <button onClick={() => counterStore.decrement()}>--</button>
    </>
  );
});

// src/components/ThemeToggler.tsx
export const ThemeToggler = observer(() => {
  const { themeStore } = useStores();

  return (
    <>
      <div>{themeStore.theme}</div>
      <button onClick={() => themeStore.setTheme("light")}>
        set theme: light
      </button>
      <button onClick={() => themeStore.setTheme("dark")}>
        set theme: dark
      </button>
    </>
  );
});

// src/App.tsx
const App = ({ stars }) => (
  <main>
    <div>Next stars: {stars}</div>
    <Counter />
    <ThemeToggler />
  </main>
);

App.getInitialProps = async ctx => {
  console.log(ctx.initialStoreData);
  const url = "https://api.github.com/repos/zeit/next.js";
  const response = await Axios.get(url);
  const json = response.data;
  return { stars: json.stargazers_count, store: ctx.initialStoreData };
};

export default App;
