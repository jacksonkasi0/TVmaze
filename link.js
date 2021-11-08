// Class selector
const elements = document.querySelector("a");

// Function
const fn = () => console.log('click');

// Loop
for(let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', fn, false);
}