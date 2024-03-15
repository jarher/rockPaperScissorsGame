import { startGameController } from "./startGameController.js";
import { changeState } from "../app.js";
import { renderTemplate } from "./renderTemplate.js";

export const routerController = async ({ data, pages }) => {
  const arrayPages = await pages;
  window.addEventListener("hashchange", () => {
    let pageName;
    switch (window.location.hash) {
      case "#/":
        pageName = "home";
        // renderTemplate("home", arrayPages);
        break;
      case "#/start":
        pageName = "start";
        // renderTemplate("start", arrayPages);
        break;
      default:
        pageName = "error";
        // renderTemplate("error", arrayPages);
        break;
    }
    renderTemplate(pageName, arrayPages);
    if (pageName === "start") {
      startGameController(data);
      document.dispatchEvent(changeState);
    }
  });
};
