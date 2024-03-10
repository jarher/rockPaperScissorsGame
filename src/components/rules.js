import { buttonComponent } from "./btnComponent.js";

export const rulesModalView = () => {
  const rulesModalPanel = document.createElement("div");
  rulesModalPanel.className = "rules-modal-panel";
  const template = `
    <h2>RULES</h2>
    <img src="./src/images/image-rules-bonus.svg" alt="image rules bonus" />
    ${buttonComponent({
      nameClass: "btn-close",
      element: "<img src='./src/images/icon-close.svg' alt='close button'/>",
    })}
  `;
  rulesModalPanel.innerHTML = template;
  return rulesModalPanel;
};
