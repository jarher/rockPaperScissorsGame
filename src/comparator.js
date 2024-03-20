//options to compare
const winningCombinations = [
  ["scissors-option", ["paper-option", "lizard-option"]],
  ["paper-option", ["rock-option", "spock-option"]],
  ["rock-option", ["lizard-option", "scissors-option"]],
  ["lizard-option", ["spock-option", "paper-option"]],
];
//compare userOption vs houseOption
const isUserWinner = (userOption, houseOption) => {
  for (const [option, beats] of winningCombinations) {
    if (userOption === option && beats.includes(houseOption)) {
      return true;
    }
  }
  return false;
};

export const compareOptions = function (userOption, houseOption, eventData) {
  const score = eventData.detail.score;
  //asign new values to changeState
  eventData.detail.userOption = userOption;
  eventData.detail.houseOption = houseOption;
  eventData.detail.isFinished = true;

  if (userOption === houseOption) {
    eventData.detail.isUserWin = null;
    return;
  }
  if (isUserWinner(userOption, houseOption)) {
    eventData.detail.isUserWin = true;
    eventData.detail.score = score + 1;
    return;
  }
  eventData.detail.isUserWin = false;
  eventData.detail.score = score == 0 ? 0 : score - 1;
};
