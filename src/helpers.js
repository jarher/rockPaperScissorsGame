import { changeState } from "./app.js";

export const getStates = (data) => JSON.parse(JSON.stringify(data));

export const randomValue = () => Math.floor(Math.random() * 5);

export const compareOptions = function (e) {
  const userOption = e.detail.state.userOption;
  const houseOption = e.detail.state.houseOption;
  const score = e.detail.state.score;

  if (userOption === houseOption) {
    changeState.detail.state.isUserWin = null;
    return;
  }
  if (
    (userOption === "scissors-option" && houseOption === "paper-option") ||
    (userOption === "paper-option" && houseOption === "rock-option") ||
    (userOption === "rock-option" && houseOption === "lizard-option") ||
    (userOption === "lizard-option" && houseOption === "spock-option") ||
    (userOption === "spock-option" && houseOption === "scissors-option") ||
    (userOption === "paper-option" && houseOption === "spock-option") ||
    (userOption === "scissors-option" && houseOption === "lizard-option") ||
    (userOption === "spock-option" && houseOption === "rock-option") ||
    (userOption === "lizard-option" && houseOption === "paper-option") ||
    (userOption === "rock-option" && houseOption === "scissors-option")
  ) {
    changeState.detail.state.isUserWin = true;
    changeState.detail.state.score = score + 1;
    return;
  }
  changeState.detail.state.isUserWin = false;
  changeState.detail.state.score = score == 0 ? 0 : score - 1;
};
