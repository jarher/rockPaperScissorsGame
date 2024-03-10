import { optionCircle } from "../components/optionCircle.js";
import { renderNodes } from "../controller/renderNodes.js";
import { data } from "../data.js";

export const homeSection = () => {
  const home = document.createElement("section");
  home.className = "home";
  const pentagonImg = document.createElement("img");
  pentagonImg.src = "./src/images/bg-pentagon.svg";
  pentagonImg.className = "pentagon-img";

  const nodes = [
    {
      data: pentagonImg,
      isMapping:false,
      container: home,
    },
    {
      data,
      isMapping: true,
      template: optionCircle,
      container: home,
    },
  ];
  
  nodes.forEach(node => renderNodes(node));

  return home;
};
