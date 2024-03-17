import { getElement } from "../helpers.js";

const add = (index = 1) =>
  Array.from(document.querySelectorAll(".option-wrapper"))
    [index].querySelector("figure")
    .classList.add("winner-indicator");

export const winnerIndicatorController = function (e) {
  const winnerMessage = getElement(".winner-message");
  if (e.detail.isUserWin !== null) {
    if (e.detail.isUserWin) {
      add(0);
      winnerMessage.textContent = "YOU WIN";
      return;
    }
    add();
    winnerMessage.textContent = "YOU LOSE";
  }
};
