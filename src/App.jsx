import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/cssModules/CssModules";

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px",
  };

  return (
    <>
      <h1 style={{ color: "red" }}>안녕하세요.</h1>
      <ColoredMessage color="blue">잘 지내시죠???</ColoredMessage>
      <ColoredMessage color="pink">잘 지냅니다!!!</ColoredMessage>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      <CssModules />
    </>
  );
};
