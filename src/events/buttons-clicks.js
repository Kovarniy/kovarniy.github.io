import {
  openGameSettings,
  renderGameMenu,
  hiddenEndGameWindow,
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
  hiddenEndGameWindow();
  renderGameMenu("game-field");
  gameState.reset();
};

export { newGame, openSettings, endGame };
