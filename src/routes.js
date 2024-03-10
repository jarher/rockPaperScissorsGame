import { callControllers } from "./controller/callControllers.js";
import { mainController } from "./controller/mainController.js";
import { startGameController } from "./controller/startGameController.js";
import { errorSection } from "./pages/error.404.view.js";
import { homeSection } from "./pages/home.section.view.js";

export function Router() {
  let { hash } = location;
  let view;
  //agregar animación al cambiar de vista
  switch (hash.slice(1)) {
    case "/":
      view = homeSection();
      break;
    case "/start":
      view = startGameController();
      break;
    default:
      view = errorSection();
      break;
  }

  callControllers([{ controller: mainController, params: view }]);
}
