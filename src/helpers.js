import { changeState } from "./app.js";

export const getStates = (data) => JSON.parse(JSON.stringify(data));

export const randomValue = () => Math.floor(Math.random() * 5);

export const compareOptions = function (userOption, houseOption) {
  changeState.detail.userOption = userOption;
  changeState.detail.houseOption = houseOption;
  changeState.detail.isFinished = true;
  const score = changeState.detail.score;

  if (userOption === houseOption) {
    changeState.detail.isUserWin = null;
  } else if (
    (userOption === "scissors-option" && houseOption === "paper-option") ||
    (userOption === "paper-option" && houseOption === "rock-option") ||
    (userOption === "rock-option" && houseOption === "lizard-option") ||
    (userOption === "lizard-option" && houseOption === "spock-option") ||
    (userOption === "spock-option" && houseOption === "scissors-option") ||
    (userOption === "paper-option" && houseOption === "spock-option") ||
    (userOption === "scissors-option" && houseOption === "lizard-option") ||
    (userOption === "spock-option" && houseOption === "rock-option") ||
    (userOption === "lizard-option" && houseOption === "paper-option") ||
    (userOption === "rock-option" && houseOption === "scissors-option")
  ) {
    changeState.detail.isUserWin = true;
    changeState.detail.score = score + 1;
  } else {
    changeState.detail.isUserWin = false;
    changeState.detail.score = score == 0 ? 0 : score - 1;
  }

  return changeState;
};

export const getPage = async function (url) {
  try {
    const response = await fetch(url);
    const data = response.text();
    return data;
    // fetch(url)
    //   .then((response) => response.text())
    //   .then((html) => {
    //     document.querySelector("#root").innerHTML = html;
    //     if (callback) callback();
    //   });
  } catch (error) {
    console.log('ocurrió un error')
  }
  
};
