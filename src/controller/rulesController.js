import { pages } from "../app.js";
import { fadeIn, getElement } from "../helpers.js";

export const rulesController = function () {
  const rulescontent = pages.find((page) => page.name === "rules").content;
  const rulesModalPanel = document.createElement("div");
  rulesModalPanel.className = "rules-modal-panel";
  rulesModalPanel.innerHTML = rulescontent;
  getElement("body").prepend(rulesModalPanel);
  fadeIn(".rules-modal-panel");
};
