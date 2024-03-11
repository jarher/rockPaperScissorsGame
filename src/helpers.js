import { states } from "./app.js";

export const setStates = function (data, obj) {
  for (let key in obj) {
    if (data.hasOwnProperty(key)) {
      data[key] = obj[key];
    }
  }
};

export const getStates = (data) => JSON.parse(JSON.stringify(data));

export const randomValue = () => Math.floor(Math.random() * 5);

export const compareOptions = function () {
  const userOption = getStates(states).userOption;
  const houseOption = getStates(states).houseOption;

  if (userOption === houseOption) {
    setStates(states, { isUserWin: null });
    return;
  }
  if (
    (userOption === "scissors-option" &&
      houseOption === "paper-option") ||
    (userOption === "paper-option" &&
      houseOption === "rock-option") ||
    (userOption === "rock-option" &&
      houseOption === "lizard-option") ||
    (userOption === "lizard-option" &&
      houseOption === "spock-option") ||
    (userOption === "spock-option" &&
      houseOption === "scissors-option") ||
    (userOption === "paper-option" &&
      houseOption === "spock-option") ||
    (userOption === "scissors-option" &&
      houseOption === "lizard-option") ||
    (userOption === "spock-option" &&
      houseOption === "rock-option") ||
    (userOption === "lizard-option" &&
      houseOption === "paper-option") ||
    (userOption === "rock-option" &&
      houseOption === "scissors-option")
  ) {
    setStates(states, { isUserWin: true, score: getStates(states).score + 1 });
    return;
  }
  setStates(states, {
    isUserWin: false,
    score: getStates(states).score == 0 ? 0 : getStates(states).score - 1,
  });
};
