import { compareOptions, randomValue } from "../helpers.js";
import { changeState } from "../app.js";
import { startGameComponent } from "../components/startgameComponent.js";
import { data } from "../data.js";
import { optionSelectedController } from "./optionSelectedController.js";
import { showWarningController } from "./showWarningController.js";
import { callControllers } from "./callControllers.js";

export const startGameController = function (e) {
  const gameContainer = startGameComponent();

  changeState.detail.state.houseOption = data[randomValue()].nameClass;
  changeState.detail.state.isFinished = true;

  const params = { gameContainer, e };

  callControllers([
    {
      controller:compareOptions,
      params:e
    },
    {
      controller: optionSelectedController,
      params,
    },
    {
      controller: showWarningController,
      params,
    },
  ]);
  return gameContainer;
};
