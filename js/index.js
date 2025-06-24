var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.replace("navbar-transparent", "navbar-colored");
  } else {
    navbar.classList.replace("navbar-colored", "navbar-transparent");
  }
});
