import { states } from "../app.js";
import { getStates } from "../helpers.js";
import { fadeIn } from "./fadeIn.controller.js";
import { fadeOut } from "./fadeOutController.js";

export const scoreController = () => {
  const scoreValue = document.querySelector(".score-value");
  fadeOut(scoreValue);
  setTimeout(() => {
    scoreValue.textContent = getStates(states).score;
    fadeIn(scoreValue);
  }, 300);
  
};
