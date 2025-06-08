import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <>
      <h1>안녕하세요.</h1>
      <h2>반갑습니다.</h2>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
