import { fadeIn } from "./fadeController.js";
import { fadeOut } from "./fadeController.js";
// import { rulesPage } from "../pages/rulesPage.js";
import { compareOptions, randomValue } from "../helpers.js";
import { data } from "../data.js";

export const eventsController = function () {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-rules")) {
      // const rulesContent = rulesPage();
      // renderNodes({
      //   data: rulesPage(),
      //   container: document.querySelector("body"),
      // });
      // fadeIn(rulesContent);
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
      // compare selections by gamers, first parameter is userSelection
      // second parameter is house selection
      const changeState = compareOptions(
        e.target.classList[0],
        data[randomValue()].nameClass
      );
    }
  });
};
