export const optionSelectedComponent =  ({ gamer, obj }) => {
  const optionWrapper = document.createElement("div");
  optionWrapper.className = "option-wrapper";

  const optionName = document.createElement("span");
  optionName.className = "option-name";
  optionName.innerText = gamer;

  optionWrapper.appendChild(obj);
  optionWrapper.appendChild(optionName);

  return optionWrapper;
};


