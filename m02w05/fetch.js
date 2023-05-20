console.log('Hello from promises example! 👋');

// COMMON WAYS TO WORK WITH PROMISES
// Using fetch webAPI built-in tool in the browser

// To fetch text files
fetch('./loremipsum.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// To fetch image files
fetch('./babypanda.jpg')
  .then((response) => response.blob())
  .then((image) => console.log(image));

// To fetch JSON data from an API
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => response.json())
  .then((json) => console.log(json.name));

// To fetch many APIs at the same time
const myPromises = [
  fetch('https://swapi.dev/api/people').then((res) => res.json()),
  fetch('https://pokeapi.co/api/v2/pokemon').then((res) => res.json()),
  fetch('https://rickandmortyapi.com/api/character').then((res) => res.json()),
];

// We can receive ALL the results at once with Promise.all
Promise.all(myPromises).then((allResults) =>
  console.log('allResults', allResults)
);

// Or we can receive the FIRST result with Promise.race
Promise.race(myPromises).then((firstResult) =>
  console.log('firstResult', firstResult)
);
