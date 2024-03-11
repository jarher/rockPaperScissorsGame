import { renderNodes } from "./renderNodes.js";

export const mainController = (content) => {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  renderNodes({ data: content, isMapping: false, container: main });
  setTimeout(() => content.classList.add("fadeIn"), 300);
};
