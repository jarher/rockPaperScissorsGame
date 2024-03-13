import {getPage} from "../helpers.js"
import {startGameController} from "./startGameController.js";
import {changeState} from "../app.js";
import { renderTemplate } from "./renderTemplate.js";

export const routerController = () => {
  window.addEventListener("hashchange", async () => {
    switch (window.location.hash) {
      case "#/":
        renderTemplate(await getPage("./src/pages/home.html"));
        break;
      case "#/start":
        renderTemplate(await getPage("./src/pages/start.html"));
        startGameController();
        document.dispatchEvent(changeState)
        break;
      default:
        renderTemplate(await getPage("./src/pages/error.html"));
        break;
    }
  });
};
