/* 요소 전개 */
// 스프레드 구문은 ...과 같이 점 3개를 연결해서 사용한다.
// 배열에 이용해서 내부 요소를 순차적으로 전개할 수 있다.
const arr1 = [1, 2];
console.log(arr1); // [1, 2]
console.log(...arr1); // 1 2

/* 요소 모으기 */
// 스프레드 구문은 요소를 모으는 데도 활용 가능하다.
const arr2 = [1, 2, 3, 4, 5];

// 분할 대입 시 남은 요소를 모은다.
const [num1, num2, ...arr3] = arr2;
console.log(arr3);
console.log(...arr3);

/* 요소 복사와 결합 */
const arr4 = [10, 20];
const arr5 = [30, 40];

// 스프레드 구문을 이용해 복사
// ...을 이용해서 순서대로 전개하며 []로 감싸므로 결과적으로 새로운 배열이 만들어진다.
const arr6 = [...arr4]; // ***강한 복사*** 완전히 새로운 배열을 만든다.
arr4.push(90);
console.log(...arr4);
console.log(...arr6);

// 복사와 동일한 방법으로 여러 배열을 전개해서 결합할 수도 있음
const arr7 = [...arr4, ...arr5];
console.log(...arr7);

// 복사와 결합은 객체에도 사용 가능
const obj4 = { val1: 10, val2: 20 };
const obj5 = { val3: 30, val4: 40 };

const obj6 = { ...obj4 };
const obj7 = { ...obj4, ...obj5 };
console.log(obj6);
console.log(obj7);

// 등호 복사의 특징 - 참조값 상속이기 때문에 한쪽 배열의 수정이 다른 쪽에 연계됌
const arr8 = arr4;
console.log(...arr4);
console.log(...arr8);

arr8[0] = 111;
console.log(...arr4);
console.log(...arr8);
