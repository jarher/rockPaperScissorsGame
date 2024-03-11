
export const homeComponent = () => {
  const home = document.createElement("section");
  home.className = "home";
  const pentagonImg = document.createElement("img");
  pentagonImg.src = "./src/images/bg-pentagon.svg";
  pentagonImg.className = "pentagon-img";

  return {home, pentagonImg};
};
