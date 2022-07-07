document.querySelector(".hamburger").addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle("Dark-mode-toggler");
  document.querySelector(".custom-h1").classList.toggle("custom-h1-dark");
  document.querySelector(".pg-D").classList.toggle("paragraph-dark");
  document.querySelector(".tired").classList.toggle("tired tired-dark");
  document.querySelector(".second-section").classList.toggle("second-section-color second-section-dark");
  document.querySelector(".custom-col-inner").classList.toggle("custom-col-inner-color custom-col-inner-dark")
  document.querySelector(".btn-style").classList.toggle("btn-style btn-style-dark text-white");
  document.querySelector(".frequent").classList.toggle("frequent-dark");
  document.querySelector(". accordion-darkener").classList.toggle("accordion-dark");
  document.querySelector("button")[3].classList.toggle("btn-dark");
  document.querySelector("button")[1].classList.toggle("btn-dark");
}
