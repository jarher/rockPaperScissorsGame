import { pages } from "../app.js";

export const rulesController = function ({getElement, fadeIn}) {
  const rulescontent = pages.find((page) => page.name === "rules").content;
  const rulesModalPanel = document.createElement("div");
  rulesModalPanel.className = "rules-modal-panel";
  rulesModalPanel.innerHTML = rulescontent;
  getElement("body").prepend(rulesModalPanel);
  fadeIn(".rules-modal-panel");
};
