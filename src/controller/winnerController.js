import { states } from "../app.js";
import { winnerComponent } from "../components/winnerComponent.js";
import { getStates } from "../helpers.js";

export const winnerController = function () {
  const winner = winnerComponent(getStates(states).score);
  return winner
};
