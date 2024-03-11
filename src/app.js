import { buttonComponent } from "./components/btnComponent.js";
import { scoreController } from "./controller/scoreController.js";
import { routerController } from "./controller/routerController.js";
import { mainComponent } from "./components/mainComponent.js";
import { headerComponent } from "./components/headerComponent.js";
import { renderNodes } from "./controller/renderNodes.js";
import { hashController } from "./controller/hashController.js";
import { callControllers } from "./controller/callControllers.js";
import { btnController } from "./controller/btnController.js";
import { mainController } from "./controller/mainController.js";
import { homeController } from "./controller/homeController.js";
import { setStates } from "./helpers.js";

export const states = {
  score: 0,
  userOption: null,
  houseOption: null,
  isUserWin: null,
  isFinished: null,
};



export const App = () => {

  const root = document.getElementById("root");
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

  // render main nodes
  renderNodes({ data: nodes, isMapping: false, container: root });

  callControllers([
    {
      controller: scoreController,
      params: null,
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
      params: homeController(),
    },
    {
      controller: btnController,
      params: null,
    },
  ]);
};
