import {
  compareOptions,
  getStates,
  randomValue,
  setStates,
} from "../helpers.js";
import { states } from "../app.js";
import { startGameComponent } from "../components/startgameComponent.js";
import { data } from "../data.js";
import { optionSelectedController } from "./optionSelectedController.js";
import { showWarningController } from "./showWarningController.js";

export const startGameController = function () {
  const gameContainer = startGameComponent();

  setStates(states, {
    houseOption: data[randomValue()].nameClass,
    isFinished: true,
  });

  const changeState = new CustomEvent("changeState", {
    bubbles: false,
    cancelable: true,
    detail: {
      state: getStates(states),
    },
  });

  compareOptions();

  optionSelectedController(gameContainer);

  showWarningController(gameContainer);

  document.dispatchEvent(changeState);
  
  return gameContainer;
};
