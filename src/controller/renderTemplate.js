import { fadeIn, getElement } from "../helpers.js";

export const renderTemplate = (pageName, array) => {
  const template = array.filter((obj) => obj.name === pageName)[0].content;
  getElement("#root").innerHTML = template;
  fadeIn("section");
};
