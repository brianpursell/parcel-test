const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

const toggle = () => {
  menu.classList.toggle("show");
  nav.classList.toggle("push");
};

document.getElementById("open-button").onclick = toggle;
document.getElementById("close-button").onclick = toggle;
