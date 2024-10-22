let prevScrollpos = window.pageYOffset;
const navHolder = document.getElementById('navHolder');

function setAnimationSpeed(speed) {
  navHolder.style.setProperty('--animation-speed', speed);
}

// Example usage: setAnimationSpeed('1s'); to set the animation speed to 1 second
setAnimationSpeed('0.5s'); // Set your desired speed here

window.onscroll = function() {
  let currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    navHolder.style.top = "0";
  } else {
    navHolder.style.top = "-100px"; // Adjust this value based on your navbar height
  }
  prevScrollpos = currentScrollpos;
}
