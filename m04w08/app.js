const myVar = 123;

$(document).ready(() => {
  const otherVar = 'abc';

  console.log('Hi from app! 👋');

  console.log(document);
  console.log(window);
  console.log(navigator);

  document.title = 'Hi from my file! 👋';

  // ------> HOW TO SELECT DOM ELEMENTS
  // with vanilla js
  // const title = document.querySelector('h1');
  // const description = document.querySelector('.description');
  // const main = document.getElementById('main');
  // const myForm = document.getElementById('my-form');
  // const myList = document.getElementById('my-list');
  // const myImgButton = document.getElementById('my-img-button');
  // const myImg = document.getElementById('my-img');

  // with jquery
  const title = $('h1');
  const description = $('.description');
  const main = $('#main');
  const myForm = $('#my-form');
  const myList = $('#my-list');
  const myImgButton = $('#my-img-button');
  const myImg = $('#my-img');

  // ------> HOW TO CHANGE CONTENT
  // with vanilla js
  // title.innerHTML = 'This title changed from JS 😱';
  // description.innerHTML = 'This is an awesome lecture! 🪄';

  // with jquery
  title.text('This title changed from JS 😱');
  description.html('This is an awesome lecture! 🪄');

  // ------> HOW TO CHANGE STYLES
  // with vanilla js
  // main.style.background = 'tomato';
  // main.style.color = 'black';

  // with jquery
  main.css('background', 'tomato');
  main.css('color', 'black');

  // ------> HOW TO ACCESS TO EVENTS
  // with vanilla js
  // myForm.addEventListener('submit', (event) => {
  //   event.preventDefault(); // to prevent page reloading when submitting

  //   console.log(event); // the full event object
  //   console.log(event.target); // the element that triggered that event
  //   console.log(event.target.elements); // the input tags inside the form
  //   console.log(event.target.elements.topic.value); // the value typed in the input with name="topic"

  //   // to add the new topic
  //   const newTopic = event.target.elements.topic.value;
  //   myList.innerHTML += `<li>${newTopic}</li>`;

  //   // to reset the form
  //   event.target.reset();
  // });

  // with jquery
  myForm.on('submit', (event) => {
    event.preventDefault(); // to prevent page reloading when submitting

    console.log(event); // the full event object
    console.log(event.target); // the element that triggered that event
    console.log(event.target.elements); // the input tags inside the form
    console.log(event.target.elements.topic.value); // the value typed in the input with name="topic"

    // to add the new topic
    const newTopic = event.target.elements.topic.value;
    myList.append(`<li>${newTopic}</li>`);

    // to reset the form
    event.target.reset();
  });

  // with vanilla js
  // myImgButton.addEventListener('click', (event) => {
  //   console.log('hello!');
  //   myImg.src =
  //     'https://www.allthingsdogs.com/wp-content/uploads/2020/10/Teacup-Pomeranian-Guide-What-To-Know-Before-Buying-Cover.jpg';
  // });

  // with jquery
  myImgButton.click((event) => {
    myImg.attr(
      'src',
      'https://www.allthingsdogs.com/wp-content/uploads/2020/10/Teacup-Pomeranian-Guide-What-To-Know-Before-Buying-Cover.jpg'
    );
  });
});
