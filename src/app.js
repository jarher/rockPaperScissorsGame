import { eventsController } from "./controller/EventsController.js";
import { getStates, getPage, fetchData } from "./helpers.js";
import { routerController } from "./controller/routerController.js";
import { renderTemplate } from "./controller/renderTemplate.js";
import { scoreController } from "./controller/scoreController.js";

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
//get html documents
export const getPages = async function () {
  const pagesName = ["home", "start", "error"];
  const pagePromises = pagesName.map(async (pageName) => ({
    name: pageName,
    content: await getPage(pageName),
  }));
  return await Promise.all(pagePromises);
};
//get app data
const getData = async function () {
  const response = await fetchData("./src/data.json");
  const data = response.json();
  return data;
};

export const App = () => {
  routerController({ data: getData(), pages: getPages() });
  eventsController(getData());

  document.addEventListener("DOMContentLoaded", async () => {
    //load initial components
    renderTemplate("home", await getPages());
    scoreController(changeState);
    window.location.hash = "#/";
  });
};
