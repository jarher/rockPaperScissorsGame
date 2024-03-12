import { buttonComponent } from "./btnComponent.js";

export const rulesModalComponent = () => {
  const rulesModalPanel = document.createElement("div");
  rulesModalPanel.className = "rules-modal-panel";
  const template = `
  <div class="rules-modal-content">
    <h2>RULES</h2>
    <img src="./src/images/image-rules-bonus.svg" alt="image rules bonus" />
    ${buttonComponent({
      nameClass: "btn-close",
      element: "",
    })}
  </div>
  `;
  rulesModalPanel.innerHTML = template;
  return rulesModalPanel;
};
