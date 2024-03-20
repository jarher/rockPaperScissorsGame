export const optionSelectedController = (params) => {
  const [{ optionData }, e] = params;
  const gamers = [
    {
      gamerData: optionData.find(
        (element) => element.nameClass === e.detail.userOption
      ),
      gamerContainer: document.querySelector(".option-user figure"),
    },
    {
      gamerData: optionData.find(
        (element) => element.nameClass === e.detail.houseOption
      ),
      gamerContainer: document.querySelector(".option-house figure"),
    },
  ];

  gamers.forEach((gamer) => {
    if (gamer.gamerData) {
      gamer.gamerContainer.classList.add(gamer.gamerData.nameClass);
      const img = gamer.gamerContainer.querySelector("img");
      if (img) {
        img.src = gamer.gamerData.imgUrl;
        img.alt = gamer.gamerData.altText;
      }
    }
  });
};
