import { newGame, openSettings, endGame } from "./events/buttons-clicks.js";
import "regenerator-runtime/runtime.js";

window.onload = () => {
  const newGameBtn = document.getElementById("new-game-btn");
  const optionsBtn = document.getElementById("options-btn");
  const endGameBtn = document.getElementById("end-game-btn");
  newGameBtn.onclick = newGame;
  optionsBtn.onclick = openSettings;
  endGameBtn.onclick = endGame;
};
