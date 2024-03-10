import { buttonComponent } from "./btnComponent.js";

export const winnerComponent = (states) => {
  const winnerWrapper = document.createElement("div");
  winnerWrapper.className = "winner-wrapper";
  const template = `
        <span class="winner-message">${
          states.isUserWin === null
            ? "DRAW"
            : states.isUserWin
            ? "YOU WIN"
            : "YOU LOSE"
        } </span>
        ${buttonComponent({
          nameClass: "winner-replay-btn",
          element: "<a href='/#/'>PLAY AGAIN</a>",
        })}
    `;
  winnerWrapper.innerHTML = template;
  return winnerWrapper;
};
