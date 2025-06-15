// 인수의 디폴트값
const sayHello1 = (name) => console.log(`${name}님 안녕하세요.`);
sayHello1();

const sayHello2 = (name = "deafult") => console.log(`${name}님 안녕하세요.`);
sayHello2();

// 객체 분할 대입의 디폴트값
const myProfile1 = {
  age: 24,
};

const { name1 } = myProfile1;
console.log(`${name1}님 안녕하세요`);

const myProfile2 = {
  age: 24,
};

const { name2 = "defaultName" } = myProfile2;
console.log(`${name2}님 안녕하세요`);
