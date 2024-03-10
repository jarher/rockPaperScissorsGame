import { states } from "../app.js";
import { winnerComponent } from "../components/winner.js";
import { data } from "../data.js";
import {
  compareOptions,
  getStates,
  randomValue,
  setStates,
} from "../helpers.js";
import { startGameSection } from "../pages/startgame.section.view.js";
import { optionSelectedController } from "./optionSelected.controller.js";
import { renderNodes } from "./renderNodes.js";
import { scoreController } from "./scoreController.js";

export const startGameController = function () {
  const  start  = startGameSection();

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
    //agregar animación para mostrar la vista de ganador, y animar la opción ganadora con un efecto de sombreado radial
    getStates(states).isFinished &&
      renderNodes({
        data: winnerComponent(getStates(states)),
        isMapping: false,
        container: start,
      });
    //animar la vista del score, transición del puntaje
    scoreController();
  }, 1000);
  return start;
};
