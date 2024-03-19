import { getElement } from "../helpers.js";

const highlightWinnerOption = (options, index = 1) => {
  if (options[index]) {
    options[index].querySelector("figure").classList.add("winner-indicator");
  }
};

export const winnerIndicatorController = function (e) {
  const options = Array.from(document.querySelectorAll(".option-wrapper"));
  ["moveLeft", "moveRight"].forEach((nameClass, i) => {
    if (options[i]) {
      options[i].classList.add(nameClass);
    }
  });

  if (e.detail && e.detail.isUserWin !== null) {
    const winnerMessage = getElement(".winner-message");
    if (e.detail.isUserWin) {
      winnerMessage.textContent = "YOU WIN";
      highlightWinnerOption(options, 0);
      return;
    }
    winnerMessage.textContent = "YOU LOSE";
    highlightWinnerOption(options);
  }
};
