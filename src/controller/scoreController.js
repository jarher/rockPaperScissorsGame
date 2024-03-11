import { states } from "../app.js";
import { getStates } from "../helpers.js";

export const scoreController = () => {
  const scoreValue = document.querySelector(".score-value");
  scoreValue.style.opacity = 0;
  setTimeout(() => {
    scoreValue.style.opacity = 1;
    scoreValue.textContent = getStates(states).score;
  }, 300);
};
