import { fadeIn, getElement } from "../helpers.js";

export const scoreController = (e) => {
  console.log(e)
  const { score, isUserWin } = e.detail;
  if (isUserWin !== null) {
    getElement(".score-value").textContent = score;
    fadeIn(".score-value");
  }
};
