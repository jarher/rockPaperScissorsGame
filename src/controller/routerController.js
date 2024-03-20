import { startGameController } from "./startGameController.js";
import { renderTemplate } from "./renderTemplate.js";

export const routerController = (props) => {
  const { eventData } = props;
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
    renderTemplate(pageName, props);
    if (pageName === "start") {
      startGameController(props);
      // launch custom event
      document.dispatchEvent(eventData);
    }
  });
};
