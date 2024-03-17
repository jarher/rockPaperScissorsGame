import { eventsController } from "./controller/EventsController.js";
import { getStates, getPage, fetchData } from "./helpers.js";
import { routerController } from "./controller/routerController.js";
import { scoreController } from "./controller/scoreController.js";
import { renderTemplate } from "./controller/renderTemplate.js";

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

const data = await getData();
const pages = await getPages();

export const App = () => {
  //load initial elements
  window.location.hash = "#/";
  routerController({ data, pages });
  eventsController(data);
  scoreController(changeState);
};
