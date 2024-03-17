import { startGameController } from "./startGameController.js";
import { changeState } from "../app.js";
import { renderTemplate } from "./renderTemplate.js";

export const routerController = ({ data, pages }) => {
  window.addEventListener("hashchange", () => {
    let pageName;
    switch (window.location.hash) {
      case "#/":
        pageName = "home";
        break;
      case "#/start":
        pageName = "start";
        break;
      default:
        pageName = "error";
        break;
    }
    renderTemplate(pageName, pages);
    if (pageName === "start") {
      startGameController(data);
      // launch custom event 
      document.dispatchEvent(changeState);
    }
  });
};
