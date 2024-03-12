import { fadeIn } from "./fadeIn.controller.js";
import { fadeOut } from "./fadeOutController.js";

export const scoreController = ({ score, isUserWin }) => {
  const scoreValue = document.querySelector(".score-value");
  if (isUserWin !== null) fadeOut(scoreValue);
  setTimeout(() => {
    scoreValue.textContent = score;
    fadeIn(scoreValue);
  }, 300);
};
