import { states } from "../app.js";
import { startGameComponent } from "../components/startgameComponent.js";
import { data } from "../data.js";
import {
  compareOptions,
  getStates,
  randomValue,
  setStates,
} from "../helpers.js";
import { optionSelectedController } from "./optionSelectedController.js";
import { renderNodes } from "./renderNodes.js";
import { scoreController } from "./scoreController.js";
import { winnerController } from "./winnerController.js";

export const startGameController = function () {

  const start = startGameComponent();

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

  setTimeout(() => {
    const winner = winnerController();
    getStates(states).isFinished &&
      renderNodes({
        data: winner,
        isMapping: false,
        container: start,
      });
    scoreController();
    setTimeout(() => winner.classList.add("fadeIn"), 100);
  }, 1000);
  return start;
};
