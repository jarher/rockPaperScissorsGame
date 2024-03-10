import { mainController } from "./controller/main.controller.js";
import { errorSection } from "./pages/error.404.view.js";
import { homeSection } from "./pages/home.section.view.js";
import { startGameSection } from "./pages/startgame.section.view.js";

export function Router() {
  let { hash } = location;

  if (!hash || hash === "#/") {
    mainController(homeSection());
    return;
  }
  if (hash.includes("#/start")) {
    mainController(startGameSection());
    return;
  }
  mainController(errorSection());
}
