import { optionCircle } from "../components/optionCircleComponent.js";
import { optionSelectedComponent } from "../components/optionSelectedComponent.js";
import { data } from "../data.js";
import { renderNodes } from "./renderNodes.js";

export const optionSelectedController = (container) => {
  document.addEventListener("changeState", (e) => {
    const user = data.filter(
      (element) => element.nameClass === e.detail.state.userOption
    )[0];
    const house = data.filter(
      (element) => element.nameClass === e.detail.state.houseOption
    )[0];

    const gamersData = [
      {
        gamer: "YOU PICKED",
        obj: optionCircle(user),
      },
      {
        gamer: "THE HOUSE PICKED",
        obj: optionCircle(house),
      },
    ];

    renderNodes({
      data: gamersData,
      isMapping: true,
      template: optionSelectedComponent,
      container,
    });
  });
};
