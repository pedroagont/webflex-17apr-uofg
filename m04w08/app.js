const myVar = 123;

$(document).ready(() => {
  const otherVar = 'abc';

  console.log('Hi from app! 👋');

  console.log(document);
  console.log(window);
  console.log(navigator);

  document.title = 'Hi from my file! 👋';

  // How to select elements
  // const title = document.querySelector('h1');
  // const description = document.querySelector('.description');
  const main = document.getElementById('main');
  const myInput = document.getElementById('my-input');
  // const myButton = document.getElementById('my-button');
  // const myList = document.getElementById('my-list');

  // How to change the content of DOM elements
  // title.innerHTML = 'This title changed from JS 😱';
  // description.innerHTML = 'This is an awesome lecture! 🪄';

  // jquery
  $('h1').html('This title changed with jQuery!');
  $('.description').text('This description is changed through jQuery');

  // How to change styles
  main.style.background = 'indigo';

  let topic = '';

  // How to access events from elements
  myInput.addEventListener('keyup', (event) => {
    console.log(event); // the full event object
    console.log(event.target); // the element that triggered that event
    console.log(event.target.value); // the value typed in the input

    topic = event.target.value;
  });

  // myButton.addEventListener('click', (event) => {
  //   console.log('clicked!');

  //   myList.innerHTML += `<li>${topic}</li>`;
  // });

  const handleClick = (e) => {
    // console.log('Clicked through jquery');

    $('#my-list').append(`<li>${topic}</li>`);
  };

  $('#my-button').on('click', handleClick);
});
