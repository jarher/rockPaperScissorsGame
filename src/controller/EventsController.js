import { compareOptions, fadeIn, fadeOut, getElement, randomValue, timer } from "../helpers.js";
import { rulesController } from "./rulesController.js";

export const eventsController = function (data) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-rules")) {
      getElement('body').prepend(rulesController());
      fadeIn(".rules-modal-panel");
    }
    if (e.target.matches(".btn-close")) {
      const modal = fadeOut(".rules-modal-panel");
      timer(() => modal.remove(), 300);
    }
    if (e.target.matches(".winner-replay-btn")) {
      window.location.hash = "#/";
    }
    if (e.target.matches(".option")) {
      window.location.hash = "#/start";
      // compare selections by gamers, first parameter is user selection
      // second parameter is house selection
      compareOptions(e.target.classList[0], data[randomValue()].nameClass);
    }
  });
};
