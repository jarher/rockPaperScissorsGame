import { optionSelectedController } from "./optionSelectedController.js";
import { showWarningController } from "./showWarningController.js";

export const startGameController = function (props) {
  document.addEventListener("changeState", (e) => {
    const params = [props, e];
    optionSelectedController(params);
    showWarningController(param);
  });
};
