import { startGameController } from "./startGameController.js";
import { changeState } from "../app.js";
import { renderTemplate } from "./renderTemplate.js";

export const routerController = async ({data, pages}) => {
  const arrayPages = await pages;
  window.addEventListener("hashchange", () => {
    switch (window.location.hash) {
      case "#/":
        renderTemplate("home", arrayPages);
        break;
      case "#/start":
        renderTemplate("start", arrayPages);
        startGameController(data);
        document.dispatchEvent(changeState);
        break;
      case "#/rules":
        renderTemplate("rules", arrayPages);
        break;
      default:
        renderTemplate("error", arrayPages);
        break;
    }
  });
};
