import {
  openGameSettings,
  renderGameMenu,
} from "../engine/gameFieldActivity.js";
import { startGame } from "../engine/newGame.js";
import { gameState } from "../engine/gameStatistics.js";

// This btn removed game-menu and uploaded game-field wich cards
const newGame = () => {
  startGame();
};

const openSettings = () => {
  openGameSettings();
};

const endGame = () => {
  renderGameMenu();
  gameState.reset();
  const newGameBtn = document.getElementById("new-game-btn");
  const optionsBtn = document.getElementById("options-btn");
  newGameBtn.onclick = newGame;
  optionsBtn.onclick = openSettings;
};

export { newGame, openSettings, endGame };
