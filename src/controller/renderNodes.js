const appendTo = (parent, child) => parent.appendChild(child);

export const renderNodes = ({ data, isMapping, template, container }) => {
  
  if (Array.isArray(data)) {
    if (isMapping) {
      data
        .map((element) => template(element))
        .forEach((node) => appendTo(container, node));
        return;
    }
    data.forEach(node => appendTo(container, node));
    return;
  }
  appendTo(container, data);
};
