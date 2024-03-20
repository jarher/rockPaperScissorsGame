export const getStates = (data) => JSON.parse(JSON.stringify(data));

export const randomValue = () => Math.floor(Math.random() * 5);

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

export const callControllers = function(controllerArray, params){
  controllerArray.forEach(controller => controller(params));
}