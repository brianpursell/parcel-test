const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");

const toggle = () => {
  menu.classList.toggle("pull");
  nav.classList.toggle("push");
};

openButton.onclick = toggle;
closeButton.onclick = toggle;
