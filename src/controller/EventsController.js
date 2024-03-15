import { fadeIn, fadeOut } from "./fadeController.js";
import { compareOptions, randomValue } from "../helpers.js";
import { rulesController } from "./rulesController.js";

export const eventsController = function (value) {
  document.addEventListener("click", async (e) => {
    if (e.target.matches(".btn-rules")) {
      document.querySelector('body').prepend(rulesController());
      fadeIn(document.querySelector(".rules-modal-panel"));
    }
    if (e.target.matches(".btn-close")) {
      const modal = document.querySelector(".rules-modal-panel");
      fadeOut(modal);
      setTimeout(() => modal.remove(), 300);
    }
    if (e.target.matches(".winner-replay-btn")) {
      window.location.hash = "#/";
    }
    if (e.target.matches(".option")) {
      window.location.hash = "#/start";
      // compare selections by gamers, first parameter is user selection
      // second parameter is house selection
      const data = await value;
      compareOptions(e.target.classList[0], data[randomValue()].nameClass);
    }
  });
};
