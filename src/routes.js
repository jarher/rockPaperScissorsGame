import { mainController } from "./controller/mainController.js";
import { startGameController } from "./controller/startGameController.js";
import { errorComponent } from "./components/errorComponent.js";
import { homeController } from "./controller/homeController.js";

export function Router(e) {
  let { hash } = location;
  let node;

  switch (hash.slice(1)) {
    case "/":
      node = homeController();
      break;
    case "/start":
      node = startGameController(e);
      break;
    default:
      node = errorComponent();
      break;
  }
  mainController(node);
}
