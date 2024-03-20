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
