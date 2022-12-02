const burger = document.querySelector(".burger");
const nav = document.getElementById("navbar");

burger.addEventListener("click", function () {
  nav.classList.toggle("active");
  burger.classList.toggle("burger-active");
});
