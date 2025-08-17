import { useState, useEffect, memo, useCallback } from "react";
import { ColoredMessage } from "./components/04 Props, useState, useEffect/ColoredMessage";
import { CssModules } from "./components/05 CSS Modules/CssModules";
import { Child1 } from "./components/06 rerendering/Child1";
import { Child4 } from "./components/06 rerendering/Child4";
import { Button } from "./components/04 Props, useState, useEffect/Button";
import { Card } from "./components/07 Global State Management/Card";
import axios from "axios";
import { ListItem } from "./components/08 TypeScript/ListItem";
import type { Comment } from "./interfaces/comment";
import type { User } from "./interfaces/users";
import type { UserList } from "./interfaces/userList";

export const App = memo(() => {
  console.log("App 렌더링");
  const [num, setNum] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);

  const [userList, setUserList] = useState<UserList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const onClickFetchUsers = (): void => {
    setIsLoading(true);
    setIsError(false);

    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((result) => {
          // 성과 이름을 결합하도록 변환
          const users = result.data.map((user: User) => ({
            id: user.id,
            name: `${user.username}(${user.name})`,
            company: user.company.name,
          }));
          // 사용자 목록 state 업데이트
          setUserList(users);
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }, 1000);
  };

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
          <ListItem
            id={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ))}
      </div>

      <div>
        <button onClick={onClickFetchUsers}>사용자 정보 얻기</button>
        {/* 에러 발생 시 에러 메시지 표시 */}
        {isError && <p style={{ color: "red" }}>에러가 발생했습니다.</p>}
        {/* 로딩 중에는 표시 전환 */}
        {isLoading ? (
          <p>데이터를 가져오고 있습니다.</p>
        ) : (
          userList.map((user) => (
            <p key={user.id}>{`${user.id}: ${user.name}[${user.company}]`}</p>
          ))
        )}
      </div>
    </>
  );
});
