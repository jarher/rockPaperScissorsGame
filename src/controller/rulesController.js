import rules from "../pages/rules.html";

export const rulesController = function ({ fadeIn }) {
  const rulesModalPanel = document.createElement("div");
  rulesModalPanel.className = "rules-modal-panel";
  rulesModalPanel.innerHTML = rules;
  document.body.prepend(rulesModalPanel);
  fadeIn(".rules-modal-panel");
};
