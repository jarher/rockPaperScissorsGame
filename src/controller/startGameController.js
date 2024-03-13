import { optionSelectedController } from "./optionSelectedController.js";
import { showWarningController } from "./showWarningController.js";
import { callControllers } from "./callControllers.js";

export const startGameController = function () {
  document.addEventListener("changeState", e => {
    setTimeout(() => {
      callControllers([
        {
          controller: optionSelectedController,
          params: e,
        },
        {
          controller: showWarningController,
          params: e,
        },
      ]);
    });
    },300);
    
  
};
