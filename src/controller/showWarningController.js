import { renderNodes } from "./renderNodes.js";
import { scoreController } from "./scoreController.js";
import { winnerIndicatorController } from "./winnerIndicatorController.js";
import { callControllers } from "./callControllers.js";
import { fadeIn } from "./fadeIn.controller.js";
import { winnerComponent } from "../components/winnerComponent.js";

export const showWarningController = function ({gameContainer, e}) {
  if (e.detail.state.isFinished) {
    setTimeout(() => {
      const winner = winnerComponent(e.detail.state);
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
          params: e,
        },
        {
          controller: scoreController,
          params: {
            score: e.detail.state.score,
            isUserWin: e.detail.state.isUserWin,
          },
        },
        {
          controller: fadeIn,
          params: winner,
        },
      ]);
    }, 1000);
  }
};
