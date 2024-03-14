import { scoreController } from "./scoreController.js";
import { winnerIndicatorController } from "./winnerIndicatorController.js";
import { fadeIn } from "./fadeController.js";

export const showWarningController = function (e) {
  if (e.detail.isFinished) {
    setTimeout(() => {
      winnerIndicatorController(e);
      scoreController(e);
      fadeIn(document.querySelector(".winner-wrapper"));
    }, 500);
  }
};
