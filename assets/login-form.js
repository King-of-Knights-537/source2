// Toggle Form
const container = document.querySelector(".login-form-container");
const spans = [...document.querySelectorAll(".active-click")];
const section = document.querySelector("section");

spans.map((span) => {
  span.addEventListener("click", (e) => {
    container.classList.toggle("active");
    section.classList.toggle("active");
  });
});
