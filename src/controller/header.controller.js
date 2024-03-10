import { states } from "../app.js";
import { headerView } from "../components/header.js"
export const headerController = (score) => {
  return headerView(score);
}