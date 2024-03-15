import { scoreController } from "./scoreController.js";
import { winnerIndicatorController } from "./winnerIndicatorController.js";
import { fadeIn } from "./fadeController.js";

export const showWarningController = function (e) {
  winnerIndicatorController(e);
  scoreController(e);
  setTimeout(() => {
    fadeIn(document.querySelector(".winner-wrapper"));
  }, 500);
};
