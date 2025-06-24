import { useState } from "react";

export const Button = ({ children }: any) => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <p>{num}</p>
    </>
  );
};
