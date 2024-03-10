import { callControllers } from "./controller/callControllers.js";
import { mainController } from "./controller/main.controller.js";
import { errorSection } from "./pages/error.404.view.js";
import { homeSection } from "./pages/home.section.view.js";
import { startGameSection } from "./pages/startgame.section.view.js";

export function Router() {
  let { hash } = location;
  let view;

  switch (hash.slice(1)) {
    case "/":
      view = homeSection();
      break;
    case "/start":
      view = startGameSection();
      break;
    default:
      view = errorSection();
      break;
  }

  callControllers([{ controller: mainController, params: view }]);

}
