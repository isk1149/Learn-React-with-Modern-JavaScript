/* 객체 분할 대입 */
// {}를 변수 선언부에 이용하면 객체 안에서 일치하는 속성을 추출할 수 있다.
const myProfile = {
  name: "nushida",
  age: 25,
};

const { name, age } = myProfile;
console.log(`내 이름은 ${name}이고, 나이는 ${age}입니다.`);

// 이름이 일치한다면 일부만 추출해해도 된다.
const myProfile2 = {
  name2: "nushida",
  age2: 25,
};

const { age2 } = myProfile2;
console.log(`내 나이는 ${age2}입니다.`);

// 이름이 일치한다면 순서가 달라도 된다.
const myProfile3 = {
  name3: "nushida",
  age3: 25,
};

const { age3, name3 } = myProfile3;
console.log(`내 이름은 ${name3}이고, 나이는 ${age3}입니다.`);

// 존재하지 않는 속성명은 지정할 수 없다.(undefined가 된다)
const myProfile4 = {
  name4: "nushida",
  age4: 25,
};

const { address4 } = myProfile4;
console.log(`내 주소는 ${address4}입니다.`); // undefined

// 추출한 속성에 별명을 붙일 수도 있다.
const myProfile5 = {
  name5: "nushida5",
  age5: 255,
};

const { name5: newName, age5: newAge } = myProfile5;
console.log(`내 이름은 ${newName}이고, 나이는 ${newAge}입니다.`);

/* 배열 분할 대입 */
// 배열에 분할 대입할 때는 선언부에 []를 사용하여 배열에 저장된 순서에 임의의 변수명을 설정해 추출할 수 있다.
// 객체와 달리 순서 변경 불가하고, 직접 임의로 설정한 변수명을 이용하게 된다.
const myArray6 = ["nushida6", 256];

const [name6, age6] = myArray6;
console.log(`내 이름은 ${name6}이고, 나이는 ${age6}입니다.`);

// 배열에서 첫 번째 요소만 추출할 경우
const [name7] = myArray6;
console.log(name7);
