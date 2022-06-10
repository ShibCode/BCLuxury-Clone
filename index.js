const hammenuBtn = document.querySelector(".hammenu-btn");
const openMenuBtn = document.querySelector(".fa-bars");
const closeMenuBtn = document.querySelector(".fa-close");
const hammenuMenu = document.querySelector(".hammenu");

hammenuBtn.addEventListener("click", () => {
  openMenuBtn.classList.toggle("show");
  closeMenuBtn.classList.toggle("show");
  hammenuMenu.classList.toggle("hammenu-show");
});
