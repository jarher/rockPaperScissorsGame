import { optionSelectedController } from "./optionSelectedController.js";
import { showWarningController } from "./showWarningController.js";

export const startGameController = function (data) {
  document.addEventListener("changeState", (e) => {
    optionSelectedController({ data, e });
    showWarningController(e);
  });
};
