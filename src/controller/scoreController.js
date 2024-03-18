import { fadeIn, getElement } from "../helpers.js";

export const scoreController = (e) => {
  const { score, isUserWin } = e.detail;
  getElement(".score-value").textContent = score;
  if (isUserWin !== null) {
    fadeIn(".score-value");
  }
};
