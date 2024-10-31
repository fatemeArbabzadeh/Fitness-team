const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});
