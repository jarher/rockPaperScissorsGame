import { fadeIn, getElement } from "../helpers.js";

export const renderTemplate = (pageName, array) => {
  const template = array.find((obj) => obj.name === pageName).content;
  const root = getElement("#root");
  root.innerHTML = "";
  root.innerHTML = template;
  fadeIn("section");
};
