// 화살표 함수는 ES2015(ES6)에서 추가된 새로운 함수 표기법이다.
// 기존 함수 선언 방식1
function funcion1(value) {
  return value;
}
console.log(funcion1(123));

// 기존 함수 선언 방식2
const funcion2 = function (value) {
  return value;
};
console.log(funcion2(456));

// 화살표 함수
const func2 = (value) => {
  return value;
};
console.log(func2(100));

/*****화살표 함수 작성 시 주의점*****/
// 1. 인수가 한 개인 경우 소괄호 생략이 가능
/* prettier로 인해 변환이 되서 주석처리해둠
  const func3 = value => {
    return value;
  };
*/

// 2. 처리를 한 행으로 반환하는 경우 *중괄호*와 *return*을 생략 가능
const func4 = (num1, num2) => num1 + num2;
console.log(func4(1, 2));

// 참고로 다음과 같이 중괄호로 감싼 뒤 *return*을 생략하면 함수의 body처럼 인식이 되서 값이 반환되지 않는다.
const func4_1 = (num1, num2) => {
  return num1 + num2;
};
console.log(func4_1(1, 2)); // undefined

// 3. 반환값이 여러 행일 경우 ()로 감싼 뒤 단일 행과 같이 모아서 반환할 수 있다.
// 추가 설명을 하면, 함수의 body처럼 인식이 되지 않으려면 ()로 감싸야 한다.
// 객체, 삼항연산, 즉시 실행 함수 등
// 객체
const func5 = (val1, val2) => ({
  name: val1,
  age: val2,
});
console.log(func5("nushida", 25));

// 삼항연산
const func6 = (x) => (x > 0 ? "positive" : "negative");
console.log(func6(10));

// 즉시 실행 함수
const func7 = () =>
  (function () {
    return "hello";
  })();
console.log(func7());
