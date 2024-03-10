import { states } from "../app.js";
import { getStates } from "../helpers.js";

export const scoreController = () => {
  document.querySelector(".score-value").textContent = getStates(states).score;
}