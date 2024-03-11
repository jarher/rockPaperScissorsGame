import { renderNodes } from "./renderNodes.js";
import { optionCircle } from "../components/optionCircleComponent.js";
import { homeComponent } from "../components/homeComponent.js";
import { data } from "../data.js";

export const homeController = function () {
  const { home, pentagonImg } = homeComponent();
  const nodes = [
    {
      data: pentagonImg,
      isMapping: false,
      container: home,
    },
    {
      data,
      isMapping: true,
      template: optionCircle,
      container: home,
    },
  ];
  nodes.forEach((node) => renderNodes(node));
  return home;
};
