let num = null;
let fee = num || "금액을 설정하지 않았습니다";
console.log(fee); // "금액을 설정하지 않았습니다"

num = 100;
fee = num || "금액을 설정하지 않았습니다";
console.log(fee); // 100
/*
  논리 연산자 ||는
  연산자의 왼쪽이 false라고 판정하면 오른쪽을 반환하고
  연잔자의 왼쪽이 true라고 판정되면 왼쪽을 반환한다.
*/

const num2 = 100;
const fee2 = num2 && "무언가 설정되었습니다.";
console.log(fee2);
/*
  논리 연산자 &&는
  연잔자의 왼쪽이 true라고 판정되면 오른쪽을 반환한다.
*/
