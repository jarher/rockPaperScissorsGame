import { fadeIn } from "./fadeController.js";
import { fadeOut } from "./fadeController.js";

export const scoreController = (e) => {
  const {score, isUserWin} = e.detail; 
  const scoreValue = document.querySelector(".score-value");
  if (isUserWin !== null) fadeOut(scoreValue);
  setTimeout(() => {
    scoreValue.textContent = score;
    fadeIn(scoreValue);
  }, 300);
};
