import { startGameController } from "./startGameController.js";
import { renderTemplate } from "./renderTemplate.js";
import home from "../pages/home.html";
import start from "../pages/start.html";
import error from "../pages/error.html";

export const routerController = (props) => {
  const { eventData } = props;
  window.addEventListener("hashchange", () => {
    let page;
    let startPage = false;
    switch (window.location.hash) {
      case "#/":
        page = home;
        break;
      case "#/start":
        page = start;
        startPage = true;
        break;
      default:
        page = error;
        break;
    }
    renderTemplate(page, props);
    if (startPage) {
      startGameController(props);
      document.dispatchEvent(eventData);
    }
  });
};
