import { changeState } from "./app.js";

export const getStates = (data) => JSON.parse(JSON.stringify(data));

export const randomValue = () => Math.floor(Math.random() * 5);

export const compareOptions = function (userOption, houseOption) {
  const score = changeState.detail.score;
  changeState.detail.userOption = userOption;
  changeState.detail.houseOption = houseOption;
  changeState.detail.isFinished = true;

  if (userOption === houseOption) {
    changeState.detail.isUserWin = null;
  } else if (
    (userOption === "scissors-option" &&
      (houseOption === "paper-option" || houseOption === "lizard-option")) ||
    (userOption === "paper-option" &&
      (houseOption === "rock-option" || houseOption === "spock-option")) ||
    (userOption === "rock-option" &&
      (houseOption === "lizard-option" || houseOption === "scissors-option")) ||
    (userOption === "lizard-option" &&
      (houseOption === "spock-option" || houseOption === "paper-option"))
  ) {
    changeState.detail.isUserWin = true;
    changeState.detail.score = score + 1;
  } else {
    changeState.detail.isUserWin = false;
    changeState.detail.score = score == 0 ? 0 : score - 1;
  }

  return changeState;
};

export const fetchData = async function (url) {
  const response = await fetch(url);
  return response;
};

export const getPage = async function (url) {
  try {
    const response = await fetchData(`./src/pages/${url}.html`);
    const data = response.text();
    return data;
  } catch (error) {
    alert("resource not found");
  }
};
