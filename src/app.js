import { eventsController } from "./controller/EventsController.js";
import { getStates, getPage } from "./helpers.js";
import { routerController } from "./controller/routerController.js";
import { renderTemplate } from "./controller/renderTemplate.js";
import { callControllers } from "./controller/callControllers.js";

export const states = {
  score: 12,
  userOption: null,
  houseOption: null,
  isUserWin: null,
  isFinished: null,
};

// copy of default states and create custom event
export const changeState = new CustomEvent("changeState", {
  bubbles: true,
  cancelable: false,
  detail: getStates(states),
});

export const App = () => {
  callControllers([
    {
      controller: routerController,
    },
    {
      controller: eventsController,
    },
  ]);
  document.addEventListener("DOMContentLoaded", async () => {
    renderTemplate(await getPage("./src/pages/home.html"));
    window.location.hash = "#/"
  });
};
