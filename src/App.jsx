export const App = () => {
  const onClickButton = () => {
    alert();
  };

  const contentStyle = {
    color: "orange",
    fontSize: "20px",
  };

  return (
    <>
      <h1 style={{ color: "red" }}>안녕하세요.</h1>
      <h2 style={contentStyle}>반갑습니다.</h2>
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};
