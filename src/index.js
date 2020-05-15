import { newGame, openOptions } from "./events/buttons-clicks.js";
import "regenerator-runtime/runtime.js";

window.onload = () => {
  const newGameBtn = document.getElementById("new-game-btn");
  const optionsBtn = document.getElementById("options-btn");
  newGameBtn.onclick = newGame;
  optionsBtn.onclick = openOptions;
};
