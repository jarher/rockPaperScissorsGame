const addClass = (index) =>
  Array.from(document.querySelectorAll(".option-wrapper"))
    [index].querySelector("figure")
    .classList.add("winner-indicator");

export const winnerIndicatorController = function (e) {
  if (e.detail.state.isUserWin !== null) {
    e.detail.state.isUserWin ? addClass(0) : addClass(1);
  }
};
