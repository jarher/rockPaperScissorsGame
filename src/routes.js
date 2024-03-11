import { mainController } from "./controller/mainController.js";
import { startGameController } from "./controller/startGameController.js";
import { errorComponent } from "./components/errorComponent.js";
import { homeController } from "./controller/homeController.js";
import { callControllers } from "./controller/callControllers.js";

export function Router() {
  let { hash } = location;
  let node;

  switch (hash.slice(1)) {
    case "/":
      node = homeController();
      break;
    case "/start":
      node = startGameController();
      break;
    default:
      node = errorComponent();
      break;
  }
  callControllers([{ controller: mainController, params: node }]);
}
