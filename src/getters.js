import { fetchData, getPage } from "./fetch.js";

//get html documents
export const getPages = async function () {
  const pagePromises = ["home", "start", "rules", "error"].map(
    async (pageName) => ({
      name: pageName,
      content: await getPage(pageName),
    })
  );
  return await Promise.all(pagePromises);
};
//get app data
export const getData = async function () {
  const response = await fetchData("./src/data/data.json");
  const data = response.json();
  return data;
};
