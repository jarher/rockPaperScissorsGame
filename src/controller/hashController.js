import { changeState } from "../app.js";

export const hashController = () => {
  document.addEventListener("click", (e) => {
    if (
      e.target.matches(".scissors-option") ||
      e.target.matches(".paper-option") ||
      e.target.matches(".rock-option") ||
      e.target.matches(".lizard-option") ||
      e.target.matches(".spock-option")
    ) {
      
      changeState.detail.state.userOption = e.target.classList[0];
      window.location.hash = "#/start";
    }
  });
};
