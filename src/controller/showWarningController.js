import { renderNodes } from "./renderNodes.js";
import { scoreController } from "./scoreController.js";
import { winnerController } from "./winnerController.js";
import { winnerIndicatorController } from "./winnerIndicatorController.js";
import { callControllers } from "./callControllers.js";
import { fadeIn } from "./fadeIn.controller.js";

export const showWarningController = function (gameContainer) {
  document.addEventListener("changeState", (e) => {
    if (e.detail.state.isFinished) {
      setTimeout(() => {
        const winner = winnerController();
        callControllers([
          {
            controller: renderNodes,
            params: {
              data: winner,
              isMapping: false,
              container: gameContainer,
            },
          },
          {
            controller: winnerIndicatorController,
            params: null,
          },
          {
            controller: scoreController,
            params: null,
          },
          {
            controller: fadeIn,
            params: winner,
          },
        ]);
      }, 1000);
    }
  });
};
