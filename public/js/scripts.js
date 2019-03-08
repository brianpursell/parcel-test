const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");

const close =
  "M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z";
const hamburger =
  "M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z";

const toggleIcon = () => {
  let isHamburger = true;

  return node => {
    isHamburger
      ? node.setAttribute("d", close)
      : node.setAttribute("d", hamburger);

    isHamburger = !isHamburger;
  };
};

const toggleMenuIcon = toggleIcon();

menuButton.onclick = () => {
  const path = menuButton.querySelector("path");
  toggleMenuIcon(path);

  menu.classList.toggle("show");
};
