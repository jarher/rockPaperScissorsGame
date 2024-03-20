export const renderTemplate = (pageName, {pages, getElement, fadeIn}) => {
  const template = pages.find((obj) => obj.name === pageName).content;
  const root = getElement("#root");
  root.innerHTML = "";
  root.innerHTML = template;
  fadeIn("section");
};
