// PURE FUNCTION
// Function that affects only elements within its own scope

let myNum = 100;

const addTwoHundred = (num) => {
  return num + 200;
};
const result1 = addTwoHundred(myNum);
console.log(result1);
console.log(myNum);

const result2 = addTwoHundred(500);
console.log(result2);

// SIDE EFFECT
// Function that affect elements outside its scope

const consoleSomething = () => {
  console.log('Something!');
};
consoleSomething();

//////////

const myFerrari = {
  color: 'red',
};

const changeColor = () => {
  myFerrari.color = 'blue';
};
changeColor();
console.log(myFerrari);
