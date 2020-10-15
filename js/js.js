var noJs = document.querySelector(".no-js");
var button = document.querySelector(".close-hidden");
var mainNav = document.querySelector(".main-nav");

var open = document.querySelector(".header-page__open");
var close = document.querySelector(".header-page__close");

noJs.classList.remove("no-js");
button.classList.remove("close-hidden");


open.addEventListener("click", function(evt){
	evt.preventDefault();
	mainNav.classList.add("main-nav--open");
	open.classList.add("hidden");
	close.classList.remove("hidden");
});


close.addEventListener("click", function(evt){
	evt.preventDefault();
	mainNav.classList.remove("main-nav--open");
	open.classList.remove("hidden");
	close.classList.add("hidden");
});