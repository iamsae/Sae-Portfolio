let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("nav-holder").style.top = "0";
  } else {
    document.getElementById("nav-holder").style.top = "-60px"; 
  }
  prevScrollpos = currentScrollpos;
}