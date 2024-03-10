export const renderNodes = ({ data, isMapping, template, container }) => {
  if (Array.isArray(data)) {
    if (isMapping) {
      data
        .map((element) => template(element))
        .forEach((node) => container.appendChild(node));
        return;
    }
    data.forEach(node => container.appendChild(node));
    return;
  }
  container.appendChild(data);
};
