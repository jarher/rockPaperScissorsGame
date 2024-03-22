import { fetchData } from "./fetch.js";

//get app data
export const getData = async function () {
  const response = await fetchData("./data/data.json");
  const data = response.json();
  return data;
};
