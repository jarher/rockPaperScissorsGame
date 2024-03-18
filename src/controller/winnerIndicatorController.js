import { getElement } from "../helpers.js";

const add = (options, index = 1) => {
  options[index].querySelector("figure").classList.add("winner-indicator");
};

export const winnerIndicatorController = function (e) {
  const options = Array.from(document.querySelectorAll(".option-wrapper"));
  ['moveLeft', 'moveRight'].forEach((nameClass, i) => options[i].classList.add(nameClass))

  if (e.detail.isUserWin !== null) {
    if (e.detail.isUserWin) {
      getElement(".winner-message").textContent = "YOU WIN";
      add(options, 0);
      return;
    }
    getElement(".winner-message").textContent = "YOU LOSE";
    add(options);
  }
};
