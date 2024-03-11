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
  if (
    (getStates(states).userOption === "scissors-option" &&
      getStates(states).houseOption === "scissors-option") ||
    (getStates(states).userOption === "paper-option" &&
      getStates(states).houseOption === "paper-option") ||
    (getStates(states).userOption === "rock-option" &&
      getStates(states).houseOption === "rock-option") ||
    (getStates(states).userOption === "lizard-option" &&
      getStates(states).houseOption === "lizard-option") ||
    (getStates(states).userOption === "spock-option" &&
      getStates(states).houseOption === "spock-option")
  ) {
    setStates(states, { isUserWin: null });
    return;
  }
  if (
    (getStates(states).userOption === "scissors-option" &&
      getStates(states).houseOption === "paper-option") ||
    (getStates(states).userOption === "paper-option" &&
      getStates(states).houseOption === "rock-option") ||
    (getStates(states).userOption === "rock-option" &&
      getStates(states).houseOption === "lizard-option") ||
    (getStates(states).userOption === "lizard-option" &&
      getStates(states).houseOption === "spock-option") ||
    (getStates(states).userOption === "spock-option" &&
      getStates(states).houseOption === "scissors-option") ||
    (getStates(states).userOption === "paper-option" &&
      getStates(states).houseOption === "spock-option") ||
    (getStates(states).userOption === "scissors-option" &&
      getStates(states).houseOption === "lizard-option") ||
    (getStates(states).userOption === "spock-option" &&
      getStates(states).houseOption === "rock-option") ||
    (getStates(states).userOption === "lizard-option" &&
      getStates(states).houseOption === "paper-option") ||
    (getStates(states).userOption === "rock-option" &&
      getStates(states).houseOption === "scissors-option")
  ) {
    setStates(states, { isUserWin: true, score: getStates(states).score + 1 });
    return;
  }
  setStates(states, {
    isUserWin: false,
    score: getStates(states).score == 0 ? 0 : getStates(states).score - 1,
  });
};
