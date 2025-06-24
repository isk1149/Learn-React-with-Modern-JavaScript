import { useEffect } from "react";

export const ColoredMessage = (props: any) => {
  const { color, children } = props;

  useEffect(() => {
    console.log("ColoredMessage");
  }, []);

  const contentStyle = {
    color,
    fontSize: "20px",
  };

  return <p style={contentStyle}>{children}</p>;
};
