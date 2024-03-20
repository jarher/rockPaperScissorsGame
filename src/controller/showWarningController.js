import { addClass } from "../helpers.js";
import { winnerIndicatorController } from "./winnerIndicatorController.js";

export const showWarningController = function (props) {
  //get controllers needed, aditional functions and data from custom event
  const [params, eventData] = props;
  const { scoreController, getElement, fadeIn } = params;
  //call controllers
  //first indicate who is the winner, user or pc
  //second show user score
  const newParams = { eventData, getElement, fadeIn };
  winnerIndicatorController(newParams);
  scoreController(newParams);

  addClass(".winner-wrapper", "winner-show");
};
