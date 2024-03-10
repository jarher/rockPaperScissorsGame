import { optionCircle } from "./optionCircle.js";

const template = function ({ gamer, obj }) {
  const optionWrapper = document.createElement("div");
  optionWrapper.className = "option-wrapper";

  const optionName = document.createElement("span");
  optionName.className = "option-name";
  optionName.innerText = gamer;

  optionWrapper.appendChild(obj);
  optionWrapper.appendChild(optionName);

  return optionWrapper;
};

export const optionSelected = ({ options, container }) => {
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

  gamers
    .map((gamer) => template(gamer))
    .forEach((option) => container.appendChild(option));
};
