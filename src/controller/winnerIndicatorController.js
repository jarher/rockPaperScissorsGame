import { states } from "../app.js";
import { getStates } from "../helpers.js";

const addClass = (index) =>
  Array.from(document.querySelectorAll(".option-wrapper"))
    [index].querySelector("figure")
    .classList.add("winner-indicator");

export const winnerIndicatorController = function () {
  const isUserWin = getStates(states).isUserWin;

  if (isUserWin !== null) {
    isUserWin ? addClass(0) : addClass(1);
  }
};
