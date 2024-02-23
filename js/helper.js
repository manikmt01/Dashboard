// Selecting the button and the section
const button = document.querySelector('.toggoleButoon');
const toggoleButoonMobile = document.querySelector('.toggoleButoonMobile');
const section = document.querySelector('.minimize');
const wrapper = document.querySelector('.wrapper');
const mobileButton = document.querySelector('.mobileButton');

// Adding event listener to the button
button.addEventListener('click', function () {
  // Toggling the class in the section
  section.classList.toggle('highlighted');
  wrapper.classList.toggle('wrapperLoos');
});
// Adding event listener to the button
toggoleButoonMobile.addEventListener('click', function () {
  // Toggling the class in the section
  section.classList.toggle('highlighted');
});
mobileButton.addEventListener('click', function () {
  // Toggling the class in the section
  section.classList.toggle('highlighted');
});
