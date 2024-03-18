import { fetchData, getPage } from "./helpers.js";

//get html documents
export const getPages = async function () {
  const pagesName = ["home", "start", "error"];
  const pagePromises = pagesName.map(async (pageName) => ({
    name: pageName,
    content: await getPage(pageName),
  }));
  return await Promise.all(pagePromises);
};
//get app data
export const getData = async function () {
  const response = await fetchData("./src/data/data.json");
  const data = response.json();
  return data;
};
