const name = "nushida";
const age = 25;

// 객체의 속성명과 대입할 변수명이 같으면 생략이 가능
const user = {
  name,
  age,
};

console.log(user);
console.log(JSON.stringify(user));

/*
  ESLint는 JavaScript(및 TypeScript) 코드에서 문법 오류, 버그 가능성, 코딩 스타일 위반 등을 자동으로 찾아주는 정적 코드 분석 도구입니다.
  - 선언하지 않은 변수 사용 감지
  - 사용하지 않는 변수 경고
  - 일관되지 않은 들여쓰기나 따옴표 사용 감지
  - arrow function, var 대신 const/let 사용 권장
  - 버그 가능성이 있는 패턴 탐지 (== 대신 ===, etc)
  등등
*/
