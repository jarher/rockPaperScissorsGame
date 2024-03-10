import { optionCircle } from "../components/optionCircle.js";
import { data } from "../data.js";

export const homeSection = () => {
  const home = document.createElement("section");
  home.className = "home";
  const pentagonImg = document.createElement("img");
  pentagonImg.src = "./src/images/bg-pentagon.svg";
  pentagonImg.className = "pentagon-img";
  home.appendChild(pentagonImg);
 
  data
    .map((values) => optionCircle(values))
    .forEach((option) => home.appendChild(option));
  return home;
};
