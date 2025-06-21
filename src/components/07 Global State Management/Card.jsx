import { EditButton } from "./EditButton";

const style = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#e9dbd0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const Card = (props) => {
  console.log("Card 버킷 릴레이");
  // props로 isAdmn(관리자 플래그)를 받아서 EditButton 컴포넌트로 버킷 릴레이를 한다.
  const { isAdmin } = props;

  return (
    <div style={style}>
      <p>야마다 타로</p>
      <EditButton isAdmin={isAdmin} />
    </div>
  );
};
