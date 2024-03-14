import { fadeIn } from "./fadeController.js";

export const renderTemplate = (pageName, array) => {
  const template = array.filter((obj) => obj.name === pageName)[0].content;
  document.querySelector("#root").innerHTML = template;
  fadeIn(document.querySelector("section"));
};
