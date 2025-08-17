import { useState } from "react";
import { UserList } from "../interfaces/userList";
import axios from "axios";
import { User } from "../interfaces/users";

export const useFetchUsers = () => {
  const [userList, setUserList] = useState<UserList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const onClickFetchUsers = () => {
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

  return { userList, onClickFetchUsers, isError, isLoading };
};
