import { changeState } from "./app.js";

export const getStates = (data) => JSON.parse(JSON.stringify(data));

export const randomValue = () => Math.floor(Math.random() * 5);
//options to compare
const winningCombinations = [
  ["scissors-option", ["paper-option", "lizard-option"]],
  ["paper-option", ["rock-option", "spock-option"]],
  ["rock-option", ["lizard-option", "scissors-option"]],
  ["lizard-option", ["spock-option", "paper-option"]],
];
//compare userOption vs houseOption
const isUserWinner = (userOption, houseOption) => {
  for (const [option, beats] of winningCombinations) {
    if (userOption === option && beats.includes(houseOption)) {
      return true;
    }
  }
  return false;
};

export const compareOptions = function (userOption, houseOption) {
  const score = changeState.detail.score;
  //asign new values to changeState
  changeState.detail.userOption = userOption;
  changeState.detail.houseOption = houseOption;
  changeState.detail.isFinished = true;

  if (userOption === houseOption) {
    changeState.detail.isUserWin = null;
  } else if (isUserWinner(userOption, houseOption)) {
    changeState.detail.isUserWin = true;
    changeState.detail.score = score + 1;
  } else {
    changeState.detail.isUserWin = false;
    changeState.detail.score = score == 0 ? 0 : score - 1;
  }
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
    throw new Error("resource not found");
  }
};

export const getElement = (selector) => document.querySelector(selector);

export const addClass = (selector, nameClass) =>
  getElement(selector).classList.add(nameClass);

export const fadeIn = (selector) => {
  addClass(selector, "fadeIn");
  fadeOut(selector);
};

export const fadeOut = (selector) => {
  timer(() => getElement(selector).classList.remove("fadeIn"), 500);
  return getElement(selector);
};

export const timer = (callback, time) => {
  setTimeout(() => callback(), time);
};
