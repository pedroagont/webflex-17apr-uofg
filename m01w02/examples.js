// EXAMPLE: create a logEach function to log each item in an array
const logEach = function (arr) {
  for (const item of arr) {
    console.log(item);
  }
};

const fruits = ['apple', 'orange', 'kiwi'];
logEach(fruits);

// forEach
const forEach = function (arr, cb) {
  for (const item of arr) {
    cb(item);
  }
};

const forEachResult = forEach(fruits, (fruit) => console.log(`happy ${fruit}`));
console.log('forEachResult', forEachResult);

// map
const map = function (arr, cb) {
  const result = [];
  for (const item of arr) {
    result.push(cb(item));
  }
  return result;
};

const happyFruits = map(fruits, (fruit) => `happy ${fruit}`);
console.log(fruits);
console.log(happyFruits);

const originalNumbers = [1, 2, 3];
const plusTwoNumbers = map(originalNumbers, (num) => num + 2);
console.log(originalNumbers);
console.log(plusTwoNumbers);

const builtInForEach = fruits.forEach((fruit) => `happy ${fruit}`);
console.log('builtInForEach', builtInForEach);

const builtInMap = fruits.map((fruit) => `happy ${fruit}`);
console.log(builtInMap);

// filter
const filter = function (arr, cb) {
  const result = [];
  for (const item of arr) {
    if (cb(item)) {
      result.push(item);
    }
  }
  return result;
};

const peopleAges = [29, 32, 55, 68, 13, 8, 19, 5];

const adults = filter(peopleAges, (age) => age >= 18);
const kids = filter(peopleAges, (age) => age < 18);

console.log(peopleAges);
console.log(adults);
console.log(kids);
