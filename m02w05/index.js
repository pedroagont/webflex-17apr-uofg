const myRandomNumberPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      if (randomNumber < 50) {
        reject(new Error('random number is less than 50'));
      } else {
        resolve(randomNumber);
      }
    }, 2000);
  });
};

// console.log(myRandomNumberPromise());
myRandomNumberPromise()
  .then((randomNumber) => randomNumber * 2)
  .then((randomNumberTimes2) => {
    if (randomNumberTimes2 < 150) {
      throw new Error('random number times 2 is less than 150');
    }
    return randomNumberTimes2 + 100;
  })
  .then((randomNumberTimes2Plus100) => randomNumberTimes2Plus100)
  .then(() => console.log('Promise finished!'))
  .catch((err) => console.log(err));
