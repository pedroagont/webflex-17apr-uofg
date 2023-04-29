// Primitive values
const num = 10;
const name = 'Pedro';
const isAlive = true;

// Mutable values
const santasWishlish = ['xbox', 'game'];
santasWishlish[0] = 'nintendo';
santasWishlish.push('bike');

const car = {
  name: 'Ferrari',
  color: 'red',
};
car.color = 'blue';

// Function traditional declaration
sayHiTrad();

function sayHiTrad() {
  console.log('Hi traditional! 👋');
}

// Function stored as a value
const sayHi = function () {
  console.log('Hi fn expression! 👋 ');
};

// Function passing/reference
const otherFn = sayHi;

// Function calling/executing/invoking
otherFn();

// Functions that receive other functions as arguments
const runOtherFn = function (myArgFn) {
  console.log('Running function as an argument!');
  myArgFn();
};

const sayHello = function () {
  console.log('Hello!');
};
const sayGoodbye = function () {
  console.log('Goodbye!');
};
runOtherFn(sayHello);
runOtherFn(sayGoodbye);

runOtherFn(function () {
  console.log('Hi from anonymous function!');
});
runOtherFn(() => console.log('Hi from anonymous arrow function!'));

const sum = (a, b) => a + b;
const result = sum(2, 3);
console.log('sum=' + result);

// Higher order functions and callbacks
const welcomeUserHOF = function (username, callback) {
  callback(username);
};
const completeProfileMesage = function (username) {
  console.log(`Welcome ${username}, your profile is complete!`);
};
const missingDataProfileMesage = function (username) {
  console.log(`Welcome ${username}, your profile is missing data!`);
};

welcomeUserHOF('Hamanpreet', completeProfileMesage);
welcomeUserHOF('Oluwagbenga', missingDataProfileMesage);
