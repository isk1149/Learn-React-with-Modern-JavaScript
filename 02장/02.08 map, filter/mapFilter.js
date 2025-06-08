/* map 함수는 배열을 순서대로 처리한 결과를 배열로 받을 수 있다. */
const nameArr = ["nushida", "paul", "mike"];

for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}

// for문을 대체한 루프 처리로 사용할 수도 있음.
const nameArr2 = nameArr.map((name) => {
  console.log(name);
});

// 배열 요소를 순서대로 처리하면서 결과 값을 반환하여 배열이 생성됌
const nameArr3 = nameArr.map((name) => {
  return name + "3";
});
console.log(nameArr3);

/* filter 함수는 return 뒤에 조건식을 입력해서 일치하는 것만 반환한다. */
const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

/* index 다루기 */
nameArr.map((name, index) => {
  console.log(`${index}, ${name}`);
});
