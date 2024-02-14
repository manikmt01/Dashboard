//loading
$(window).on('load', function () {
  $('#preloader').fadeOut('slow');
});
// Selecting the button and the section
const button = document.querySelector('.toggoleButoon');
const section = document.querySelector('.minimize');
const wrapper = document.querySelector('.wrapper');

// Adding event listener to the button
button.addEventListener('click', function () {
  // Toggling the class in the section
  section.classList.toggle('highlighted');
  wrapper.classList.toggle('wrapperLoos');
});
