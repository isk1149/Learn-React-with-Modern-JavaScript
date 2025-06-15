const printFormattedNum = (num) => {
  const formattedNum =
    typeof num === "number" ? num.toLocaleString() : "숫자를 입력하세요";
  return formattedNum;
};
console.log(printFormattedNum(5613848300));
console.log(printFormattedNum("5613848300"));
