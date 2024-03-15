export const optionSelectedController = async ({ data, e }) => {
  
  const array = await data;
  const gamers = [
    {
      gamerData: array.filter(
        (element) => element.nameClass === e.detail.userOption
      )[0],
      gamerContainer: document.querySelector(".option-user figure"),
    },
    {
      gamerData: array.filter(
        (element) => element.nameClass === e.detail.houseOption
      )[0],
      gamerContainer: document.querySelector(".option-house figure"),
    },
  ];
  gamers.forEach((gamer) => {
    gamer.gamerContainer.classList.add(gamer.gamerData.nameClass);
    gamer.gamerContainer.querySelector("img").src = gamer.gamerData.imgUrl;
    gamer.gamerContainer.querySelector("img").alt = gamer.gamerData.altText;
  });
};
