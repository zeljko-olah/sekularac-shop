import { useStores } from "@hooks/use-stores";
import { action } from "mobx";
import { observer, useLocalStore } from "mobx-react-lite";
import React from "react";

// src/components/Counter.tsx
export const Counter = observer(() => {
  const { counterStore } = useStores();
  const counter = useLocalStore(() => counterStore);

  return (
    <>
      <div>{counter.count}</div>
      <button onClick={action(() => counter.increment())}>++</button>
      <button onClick={action(() => counter.decrement())}>--</button>
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
    <Counter />
    <ThemeToggler />
  </main>
);

// App.getInitialProps = async ctx => {
//   console.log(ctx.initialStoreData);
//   const url = "https://api.github.com/repos/zeit/next.js";
//   const response = await Axios.get(url);
//   const json = response.data;
//   return { stars: json.stargazers_count, store: ctx.initialStoreData };
// };

export default App;
