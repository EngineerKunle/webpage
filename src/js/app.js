//application JS file contains methods used for the website 
var element = document.getElementById("toggle"),
   dropList = document.getElementById("dropList"),
   navHeight = document.getElementById("nav");

element.onclick = function () {
   dropDown()
};

function dropDown() {
   dropList.classList.toggle("active");
   navHeight.classList.toggle("nav-setHeight");
}

// Below is to link the scroll link
// http://jsfiddle.net/rjSfP/93/ 
// http://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click