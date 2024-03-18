import { eventsController } from "./controller/EventsController.js";
import { routerController } from "./controller/routerController.js";
import { scoreController } from "./controller/scoreController.js";
import { getData, getPages } from "./getters.js";
import { getStates } from "./helpers.js";

export const states = {
  score: 12,
  userOption: null,
  houseOption: null,
  isUserWin: null,
};

// copy default states and create custom event
export const changeState = new CustomEvent("changeState", {
  bubbles: false,
  cancelable: false,
  detail: getStates(states),
});

export const App = async () => {
  try {
    const data = await getData();
    const pages = await getPages();
    //load initial elements
    window.location.hash = "#/";
    routerController({ data, pages });
    eventsController(data);
    scoreController(changeState);
  } catch (error) {
    console.error(error);
  }
};
