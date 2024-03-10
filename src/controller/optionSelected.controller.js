import { optionCircle } from "../components/optionCircle.js";
import { optionSelectedComponent } from "../components/optionSelected.js";
import { renderNodes } from "./renderNodes.js";

export const optionSelectedController = ({ options, container }) => {
  const { userClass, houseClass } = options;
  const gamers = [
    {
      gamer: "YOU PICKED",
      obj: optionCircle(userClass),
    },
    {
      gamer: "THE HOUSE PICKED",
      obj: optionCircle(houseClass),
    },
  ];

  renderNodes({data:gamers, isMapping:true, template:optionSelectedComponent, container})

};
