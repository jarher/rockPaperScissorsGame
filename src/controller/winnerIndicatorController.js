const highlightWinnerOption = (options, index = 1) => {
  if (options[index]) {
    options[index].querySelector("figure").classList.add("winner-indicator");
  }
};

export const winnerIndicatorController = function ({eventData, getElement}) {
  
  const options = Array.from(document.querySelectorAll(".option-wrapper"));
  ["moveLeft", "moveRight"].forEach((nameClass, i) => {
    if (options[i]) {
      options[i].classList.add(nameClass);
    }
  });

  if (eventData.detail && eventData.detail.isUserWin !== null) {
    const winnerMessage = getElement(".winner-message");
    if (eventData.detail.isUserWin) {
      winnerMessage.textContent = "YOU WIN";
      highlightWinnerOption(options, 0);
      return;
    }
    winnerMessage.textContent = "YOU LOSE";
    highlightWinnerOption(options);
  }
};
