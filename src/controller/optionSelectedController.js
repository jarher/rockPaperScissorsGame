import { data } from "../data.js";

export const optionSelectedController = (e) => {

  const gamers = [
    {
      gamerData: data.filter(
        (element) => element.nameClass === e.detail.userOption
      )[0],
      gamerContainer: document.querySelector(".option-user figure"),
    },
    {
      gamerData: data.filter(
        (element) => element.nameClass === e.detail.houseOption
      )[0],
      gamerContainer: document.querySelector(".option-house figure"),
    },
  ];

  gamers.forEach((gamer) => {
    gamer.gamerContainer.classList.add(gamer.gamerData.nameClass);
    gamer.gamerContainer.querySelector("img").src = gamer.gamerData.imgUrl;
  });

};
