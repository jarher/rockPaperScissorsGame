import { buttonComponent } from "./components/btnComponent.js";
import { headerController } from "./controller/header.controller.js";
import { routerController } from "./controller/router.controller.js";
import { main } from "./components/main.js";
import { getStates, setStates } from "./helpers.js";
import { rulesModalView } from "./components/rules.js";

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
    score: 12
  });

  const root = document.getElementById("root");

  root.appendChild(headerController(getStates(states).score));
  root.appendChild(main());

  const btnWrapper = document.createElement("div");
  btnWrapper.innerHTML = buttonComponent({ nameClass: "btn-rules", element: "RULES" });
  root.appendChild(btnWrapper);

  document.addEventListener("click", (e) => {
    if (
      e.target.matches(".scissors-option") ||
      e.target.matches(".paper-option") ||
      e.target.matches(".rock-option") ||
      e.target.matches(".lizard-option") ||
      e.target.matches(".spock-option")
    ) {
      setStates(states, { userOption: e.target.classList[0] });
      window.location.hash = "/#/start";
    }
    if (e.target.matches(".btn-rules")) {
      root.append(rulesModalView());
    }
    if (e.target.matches(".btn-close")) {
      document.querySelector(".rules-modal-panel").remove()
      
    }
  });
  routerController();
};
