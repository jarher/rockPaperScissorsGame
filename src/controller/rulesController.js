export const rulesController = function () {
  const rulesModalPanel = document.createElement("div");
  rulesModalPanel.className = "rules-modal-panel";
  const template = `
    <div class="rules-modal-content">
      <h2>RULES</h2>
      <img src="./src/images/image-rules-bonus.svg" alt="rules image" class="rules-img">
      <img src="./src/images/icon-close.svg" alt="button close" class="btn-close">
    </div>`;
  rulesModalPanel.innerHTML = template;
  return rulesModalPanel;
};