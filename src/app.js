import { eventsController } from "./controller/EventsController.js";
import { routerController } from "./controller/routerController.js";
import { scoreController } from "./controller/scoreController.js";
import { getData, getPages } from "./getters.js";
import { getElement, getStates, fadeIn, callControllers } from "./helpers.js";

//inicial app states
export const states = {
  score: 12,
  userOption: null,
  houseOption: null,
  isUserWin: null,
};

// create custom event
export const changeState = new CustomEvent("changeState", {
  bubbles: false,
  cancelable: false,
  // copy default states
  detail: getStates(states),
});
//fetch app data
const optionData = await getData();
export const pages = await getPages();

export const App = () => {
  try {
    //load initial elements
    //load module properties
    //Send initial state to the modules that require it
    const modulesProperties = {
      optionData,
      eventData: changeState,
      pages,
      getElement,
      fadeIn,
      scoreController
    };
    window.location.hash = "#/";
    // invoking the initial handlers of the application and passing parameters
    callControllers(
      [routerController, eventsController, scoreController],
      modulesProperties
    );
  } catch (error) {
    alert(error);
  }
};
