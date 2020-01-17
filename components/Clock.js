import { useObserver } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { start, stop, StoreContext } from "../store";
export default () => {
  const store = useContext(StoreContext);

  useEffect(() => {
    start();
    return stop;
  }, []);
  return (
    <div>
      {useObserver(() => (
        <div className={store.light ? "light" : ""}>
          {format(new Date(store.lastUpdate))}
          <style jsx>{`
            div {
              padding: 15px;
              color: #82fa58;
              display: inline-block;
              font: 50px menlo, monaco, monospace;
              background-color: #000;
            }
            .light {
              background-color: #999;
            }
          `}</style>
        </div>
      ))}
    </div>
  );
};

const format = t =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

const pad = n => (n < 10 ? `0${n}` : n);
