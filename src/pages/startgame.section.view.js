import { states } from "../app.js";
import { winnerComponent } from "../components/winner.js";
import { scoreController } from "../controller/header.controller.js";
import { optionSelectedController } from "../controller/optionSelected.controller.js";
import { renderNodes } from "../controller/renderNodes.js";
import { data } from "../data.js";
import { getStates, randomValue, setStates } from "../helpers.js";

const compareOptions = function (states, lastState, setStates) {
  if (
    (lastState.userOption === "scissors-option" &&
      lastState.houseOption === "scissors-option") ||
    (lastState.userOption === "paper-option" &&
      lastState.houseOption === "paper-option") ||
    (lastState.userOption === "rock-option" &&
      lastState.houseOption === "rock-option") ||
    (lastState.userOption === "lizard-option" &&
      lastState.houseOption === "lizard-option") ||
    (lastState.userOption === "spock-option" &&
      lastState.houseOption === "spock-option")
  ) {
    setStates(states, { isUserWin: null });
    return;
  }
  if (
    (lastState.userOption === "scissors-option" &&
      lastState.houseOption === "paper-option") ||
    (lastState.userOption === "paper-option" &&
      lastState.houseOption === "rock-option") ||
    (lastState.userOption === "rock-option" &&
      lastState.houseOption === "lizard-option") ||
    (lastState.userOption === "lizard-option" &&
      lastState.houseOption === "spock-option") ||
    (lastState.userOption === "spock-option" &&
      lastState.houseOption === "scissors-option") ||
    (lastState.userOption === "paper-option" &&
      lastState.houseOption === "spock-option") ||
    (lastState.userOption === "scissors-option" &&
      lastState.houseOption === "lizard-option") ||
    (lastState.userOption === "spock-option" &&
      lastState.houseOption === "rock-option") ||
    (lastState.userOption === "lizard-option" &&
      lastState.houseOption === "paper-option") ||
    (lastState.userOption === "rock-option" &&
      lastState.houseOption === "scissors-option")
  ) {
    setStates(states, { isUserWin: true, score: getStates(states).score + 1 });
    return;
  }
  setStates(states, { isUserWin: false, score: getStates(states).score - 1 });
};

export const startGameSection = () => {
  const start = document.createElement("section");
  start.className = "start";

  setStates(states, {
    houseOption: data[randomValue()].nameClass,
  });

  compareOptions(states, getStates(states), setStates);

  const options = {
    userClass: data.filter(
      (element) => element.nameClass === getStates(states).userOption
    )[0],
    houseClass: data.filter(
      (element) => element.nameClass === getStates(states).houseOption
    )[0],
  };

  // render user option
  optionSelectedController({ options, container: start });

  setStates(states, { isFinished: true });

  setTimeout(() => {
    getStates(states).isFinished &&
      renderNodes({ data: winnerComponent(getStates(states)), isMapping:false, container:start });

    scoreController(getStates(states).score);
  }, 1000);

  return start;
};
