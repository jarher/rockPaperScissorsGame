import { buttonComponent } from "./components/btnComponent.js";
import { scoreController } from "./controller/header.controller.js";
import { routerController } from "./controller/router.controller.js";
import { mainComponent } from "./components/main.js";
import { getStates, setStates } from "./helpers.js";
import { headerComponent } from "./components/header.js";
import { renderNodes } from "./controller/renderNodes.js";
import { hashController } from "./controller/hashController.js";
import { callControllers } from "./controller/callControllers.js";
import { btnController } from "./controller/btnController.js";
import { homeSection } from "./pages/home.section.view.js";
import { mainController } from "./controller/main.controller.js";

export const states = {
  score: 0,
  userOption: null,
  houseOption: null,
  isUserWin: null,
  isFinished: null,
};
export const App = () => {
  // asign default states values
  setStates(states, {
    score: 12,
  });

  const nodes = [
    headerComponent(),
    ,
    mainComponent(),
    ,
    (() => {
      const btnWrapper = document.createElement("div");
      btnWrapper.innerHTML = buttonComponent({
        nameClass: "btn-rules",
        element: "RULES",
      });
      return btnWrapper;
    })(),
    ,
  ];

  const root = document.getElementById("root");
  
  // render main nodes
  renderNodes({ data: nodes, isMapping: false, container: root });

  callControllers([
    {
      controller: scoreController,
      params: getStates(states).score,
    },
    {
      controller: hashController,
      params: null,
    },
    {
      controller: routerController,
      params: null,
    },
    {
      controller: mainController,
      params: homeSection(),
    },
    {
      controller: btnController,
      params: root,
    },
  ]);
};
