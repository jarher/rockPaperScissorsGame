import { rulesModalComponent } from "../components/rulesComponent.js";
import { fadeIn } from "./fadeIn.controller.js";
import { fadeOut } from "./fadeOutController.js";
import { renderNodes } from "./renderNodes.js";

export const btnController = () => {
  document.addEventListener(
    "click",
    (e) => {
      if (e.target.matches(".btn-rules")) {
        const node = rulesModalComponent();
        renderNodes({
          data: node,
          isMapping: false,
          container: document.querySelector("body"),
        });
        fadeIn(node);
      }
      if (e.target.matches(".btn-close")) {
        const modal = document.querySelector(".rules-modal-panel");
        fadeOut(modal);
        setTimeout(() => modal.remove(), 300);
      }
      if (e.target.matches(".winner-replay-btn")) {
        window.location.hash = "#/";
      }
    },
    { capture: true }
  );
};
