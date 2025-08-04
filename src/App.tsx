import { useState, useEffect, memo, useCallback } from "react";
import { ColoredMessage } from "./components/04 Props, useState, useEffect/ColoredMessage";
import { CssModules } from "./components/05 CSS Modules/CssModules";
import { Child1 } from "./components/06 rerendering/Child1";
import { Child4 } from "./components/06 rerendering/Child4";
import { Button } from "./components/04 Props, useState, useEffect/Button";
import { Card } from "./components/07 Global State Management/Card";
import axios from "axios";
import { ListItem } from "./components/08 TypeScript/ListItem";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export const App = memo(() => {
  console.log("App 렌더링");
  const [num, setNum] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    axios
      .get<Comment[]>("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        setComments(res.data);
      });
  }, []);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  const [isAdmin, setIsAdmin] = useState(false);
  const onCliciSwitch = () => setIsAdmin(!isAdmin);

  return (
    <>
      <h1 style={{ color: "red" }}>안녕하세요.</h1>
      <ColoredMessage color="blue">잘 지내시죠???</ColoredMessage>
      <ColoredMessage color="pink">잘 지냅니다!!!</ColoredMessage>
      <button onClick={onClickButton}>버튼-App.jsx</button>
      <p>{num}</p>
      <Button>버튼-Button.jsx</Button>
      <CssModules />

      {/* 관리자 플래그가 true일 때와 그렇지 않을 때 문자열 출력 구분 */}
      {isAdmin ? <span>관리자입니다.</span> : <span>관리자가 아닙니다.</span>}
      <button onClick={onCliciSwitch}>전환</button>
      <Card isAdmin={isAdmin} />

      <Child1 onClickReset={onClickReset} />
      <Child4 num={num} />
      <div>
        {comments.map((comment) => (
          <ListItem id={comment.id} name={comment.name} email={comment.email} />
        ))}
      </div>
    </>
  );
});
