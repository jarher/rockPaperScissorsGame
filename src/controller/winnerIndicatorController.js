const addClass = (index) =>
  Array.from(document.querySelectorAll(".option-wrapper"))
    [index].querySelector("figure")
    .classList.add("winner-indicator");

export const winnerIndicatorController = function (e) {
  const winnerMessage = document.querySelector(".winner-message");
  if (e.detail.isUserWin !== null) {
    if (e.detail.isUserWin) {
      addClass(0);
      winnerMessage.textContent = "YOU WIN";
    } else {
      addClass(1);
      winnerMessage.textContent = "YOU LOSE";
    }
  }
};
