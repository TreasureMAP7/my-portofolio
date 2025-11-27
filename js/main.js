// Dropdown
const dropdownIcon = document.getElementById("dropdown-icon");
const dropdown = document.getElementById("dropdown-content");
const dropdownAnchor = document.querySelectorAll(".dropdown-anchor");

dropdownIcon.addEventListener("click", () => {
  dropdown.classList.toggle("dropdown-show");
});

dropdownAnchor.forEach((element) => {
  element.addEventListener("click", () => {
    dropdown.classList.toggle("dropdown-show");
  });
});

// Modal function
function modalOpen(element) {
  element.classList.add("modal-show");
}

function modalClose(element) {
  element.classList.remove("modal-show");
}

// Orca Modal
const orcaOpen = document.getElementById("orca-open");
const orcaClose = document.getElementById("orca-close");
const orca = document.getElementById("orca");

orcaOpen.addEventListener("click", () => modalOpen(orca));
orcaClose.addEventListener("click", () => modalClose(orca));

// Solar Modal
const solarOpen = document.getElementById("solar-open");
const solarClose = document.getElementById("solar-close");
const solar = document.getElementById("solar");

solarOpen.addEventListener("click", () => modalOpen(solar));
solarClose.addEventListener("click", () => modalClose(solar));

// Calc Modal
const calcOpen = document.getElementById("calc-open");
const calcClose = document.getElementById("calc-close");
const calc = document.getElementById("calc");

calcOpen.addEventListener("click", () => modalOpen(calc));
calcClose.addEventListener("click", () => modalClose(calc));

// Todo Modal
const todoOpen = document.getElementById("todo-open");
const todoClose = document.getElementById("todo-close");
const todo = document.getElementById("todo");

todoOpen.addEventListener("click", () => modalOpen(todo));
todoClose.addEventListener("click", () => modalClose(todo));

// Close modal when clicking outside
const container = document.querySelectorAll(".modal-container");

container.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target === element) {
      element.classList.remove("modal-show");
    }
  });
});

// Form None (Temporary solution)
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
})