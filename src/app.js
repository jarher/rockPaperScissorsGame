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
import { getStates } from "./helpers.js";

export const states = {
  score: 0,
  userOption: null,
  houseOption: null,
  isUserWin: null,
  isFinished: null,
};

// copy of default states and create custom event
export const changeState = new CustomEvent("changeState", {
  bubbles: true,
  cancelable: false,
  detail: {
    state: getStates(states),
  },
});

export const App = () => {
  const root = document.getElementById("root");
  // asign default states values
  changeState.detail.state.score = 12;

  const nodes = [
    headerComponent(),
    ,
    mainComponent(),
    ,
    (() => {
      const btnWrapper = document.createElement("div");
      btnWrapper.className = "rules-btn-wrapper";
      btnWrapper.innerHTML = buttonComponent({
        nameClass: "btn-rules",
        element: "RULES",
      });
      return btnWrapper;
    })(),
    ,
  ];

  document.addEventListener("changeState", (e) => {
    callControllers([
      {
        controller: renderNodes,
        params: { data: nodes, isMapping: false, container: root },
      },
      {
        controller: scoreController,
        params: {
          score: changeState.detail.state.score,
          isUserWin: changeState.detail.state.isUserWin,
        },
      },
      {
        controller: hashController,
        params: null,
      },
      {
        controller: routerController,
        params: e,
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
  });
  
  document.dispatchEvent(changeState);
};
