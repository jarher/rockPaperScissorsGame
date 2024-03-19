import { compareOptions, getElement, randomValue, timer } from "../helpers.js";
import { rulesController } from "./rulesController.js";

export const eventsController = function (data) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-rules")) {
      rulesController();
    }
    if (e.target.matches(".btn-close")) {
      const modalElement = getElement(".rules-modal-panel");
      if (modalElement) {
        modalElement.style.opacity = 0;
        timer(() => {
          modalElement.remove();
        }, 500);
      }
    }
    if (e.target.matches(".winner-replay-btn")) {
      window.location.hash = "#/";
    }
    if (e.target.matches(".option") || e.target.matches(".option-img")) {
      window.location.hash = "#/start";
      // compare selections by gamers, first parameter is user selection
      // second parameter is house selection
      const userOption = e.target.matches(".option-img")
        ? e.target.parentElement.classList[0]
        : e.target.classList[0];
      compareOptions(userOption, data[randomValue()].nameClass);
    }
  });
};
