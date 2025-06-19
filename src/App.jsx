import { useState, memo, useCallback } from "react";
import { ColoredMessage } from "./components/04 Props, useState, useEffect/ColoredMessage";
import { CssModules } from "./components/05 cssModules/CssModules";
import { Child1 } from "./components/06 rerendering/Child1";
import { Child4 } from "./components/06 rerendering/Child4";
import { Button } from "./components/04 Props, useState, useEffect/Button";

export const App = memo(() => {
  console.log("App 렌더링");
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      <h1 style={{ color: "red" }}>안녕하세요.</h1>
      <ColoredMessage color="blue">잘 지내시죠???</ColoredMessage>
      <ColoredMessage color="pink">잘 지냅니다!!!</ColoredMessage>
      <button onClick={onClickButton}>버튼-App.jsx</button>
      <p>{num}</p>
      <Button>버튼-Button.jsx</Button>
      <CssModules />
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
