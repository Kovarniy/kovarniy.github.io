import { newGame } from "./events/buttons-clicks.js";

window.onload = () => {
  const newGameBtn = document.getElementById("new-game-btn");
  newGameBtn.onclick = newGame;
};
