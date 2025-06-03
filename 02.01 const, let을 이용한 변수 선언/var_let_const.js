// var를 이용한 변수 선언언
var val1 = "var 변수";
console.log(val1);

// var 변수는 덮어 쓰기 가능
val1 = "var 변수 덮어 쓰기";
console.log(val1);

// var 변수는 재선언 가능
var val1 = "var 변수 재선언";
console.log(val1);

// let을 이용한 변수 선언
let val2 = "let 변수";
console.log(val2);

// let은 덮어 쓰기 가능
val2 = "let 변수 덮어 쓰기";
console.log(val2);

// let은 재선언 불가
// let val2 = "let 변수 재선언";

// const를 이용한 변수 선언
const val3 = "const 변수";
console.log(val3);

// const 변수는 덮어 쓰기 불가능
// val3 = "const 변수 덮어 쓰기";

// const 변수는 재선언 불가능
// const val3 = "const 변수 재선언";

/* const로 정의한 변수를 변경할 수 있는 예 */
// 문자열이나 수치 등 프리미티브 타입이라 불리는 종류의 데이터는 const를 이용해 정의한 경우 덮어 쓸 수 없다.
/* 프리미티브 타입
  Boolean: true/false
  Number: 1, 2.5
  BigInt: 9007199254740992n
  String: "Nushida"
  undefined: 미정의
  null: 값 없음
  Symbol: 유일하며 바꿀 수 없는 값값
*/

// 하지만 객체나 배열 등 오브젝트 타입이라 불리는 데이터들은 const로 정의해도 도중에 값을 변경할 수 있다.
/* 오브젝트 타입
  객체
  배열
  함수
  등 프리미티브 타입 이외의 것
*/

// 객체 속성값 변경 및 추가
// 객체 정의
const obj1 = {
  name: "누시다",
  age: 24,
};
console.log(obj1);
console.log(`${obj1}`);

// const로 정의해도 객체 내용은 자유롭게 변경 가능하다.
obj1.name = "Nushida"; // 속성값 변경
obj1.address1 = "Seoul"; // 속성 추가
obj1["address2"] = "Seong-dong-gu"; // 속성 추가
console.log(obj1);

// 배열 정의
const arr1 = ["dog", "cat"];
console.log(arr1);

arr1[0] = "bird"; // 값 변경
arr1.push("monkey"); // 값 추가
arr1[2] = "snake"; // 값 추가
console.log(arr1);

// 리액트에서 대부분은 const를 사용하고, State로 관리하지 않으면서 처리 도중 값을 덮어 써야 하는 변수만 let으로 선언한다.
