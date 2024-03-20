export const scoreController = ({ eventData, getElement, fadeIn }) => {
  const { score, isUserWin } = eventData.detail;
  getElement(".score-value").textContent = score;
  if (isUserWin !== null) {
    fadeIn(".score-value");
  }
};
