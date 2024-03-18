import { addClass, getElement, timer } from "../helpers.js";
import { scoreController } from "./scoreController.js";
import { winnerIndicatorController } from "./winnerIndicatorController.js";

export const showWarningController = function (e) {
  winnerIndicatorController(e);
  scoreController(e);
  addClass(".winner-wrapper", "winner-show");
};
