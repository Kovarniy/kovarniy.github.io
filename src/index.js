import {
  newGame,
  openRating,
  openSettings,
  endGame,
} from "./events/buttons-clicks.js";
import "regenerator-runtime/runtime.js";
import { showEndGameWindow } from "./engine/gameLayout.js";

window.onload = () => {
  const newGameBtn = document.getElementById("new-game-btn");
  const ratingBtn = document.getElementById("rating-btn");
  const optionsBtn = document.getElementById("options-btn");
  const endGameBtn = document.getElementById("modalDialog");
  newGameBtn.onclick = newGame;
  ratingBtn.onclick = openRating;
  optionsBtn.onclick = openSettings;
  endGameBtn.onsubmit = endGame;
  //showEndGameWindow();
};
