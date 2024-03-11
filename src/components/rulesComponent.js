import { buttonComponent } from "./btnComponent.js";

export const rulesModalComponent = () => {
  const rulesModalPanel = document.createElement("div");
  rulesModalPanel.className = "rules-modal-panel";
  const template = `
    <h2>RULES</h2>
    <img src="./src/images/image-rules-bonus.svg" alt="image rules bonus" />
    ${buttonComponent({
      nameClass: "btn-close",
      element: "",
    })}
  `;
  rulesModalPanel.innerHTML = template;
  return rulesModalPanel;
};
