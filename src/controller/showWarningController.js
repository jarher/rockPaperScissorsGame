import { scoreController } from "./scoreController.js";
import { winnerIndicatorController } from "./winnerIndicatorController.js";
import { callControllers } from "./callControllers.js";
import { fadeIn } from "./fadeController.js";

export const showWarningController = function (e) {
  if (e.detail.isFinished) {
    setTimeout(() => {
      callControllers([
        {
          controller: winnerIndicatorController,
          params: e,
        },
        {
          controller: scoreController,
          params: e,
        },
        {
          controller: fadeIn,
          params: document.querySelector(".winner-wrapper"),
        },
      ]);
    }, 700);
  }
};
