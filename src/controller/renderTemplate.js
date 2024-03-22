export const renderTemplate = (page, {getElement, fadeIn}) => {
  const root = getElement("#root");
  root.innerHTML = "";
  root.innerHTML = page;
  fadeIn("section");
};
