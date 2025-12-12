// Dropdown Hamburger
document.getElementById("dropdown-icon").addEventListener("click", () => {
  document.getElementById("dropdown-content").classList.toggle("dropdown-show");
});

document.querySelectorAll(".dropdown-anchor").forEach((el) => {
  el.addEventListener("click", () => {
    document
      .getElementById("dropdown-content")
      .classList.toggle("dropdown-show");
  });
});

// Modal
function modalOpen(element) {
  element.classList.add("modal-show");
}

function modalClose(element) {
  element.classList.remove("modal-show");
}

// Buka dan tutup modal
let projects = ["orca", "solar", "calc", "todo"];

projects.forEach((name) => {
  document
    .getElementById(name + "-open")
    .addEventListener("click", () => modalOpen(document.getElementById(name)));
  document
    .getElementById(name + "-close")
    .addEventListener("click", () => modalClose(document.getElementById(name)));
});

// Tutup modal diluar card
document.querySelectorAll(".modal-container").forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target === element) {
      element.classList.remove("modal-show");
    }
  });
});

// Menghapus form saat refresh
window.addEventListener("load", () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
});