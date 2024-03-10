import { rulesModalComponent } from "../components/rules.js";
import { renderNodes } from "./renderNodes.js";

export const btnController = (root) => {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-rules")) {
      renderNodes({data:rulesModalComponent(), isMapping:false, container:root})
    }
    if (e.target.matches(".btn-close")) {
      document.querySelector(".rules-modal-panel").remove();
    }
    if(e.target.matches(".winner-replay-btn")){
      window.location.hash = "#/";
    }
  }, { capture: true });
};
