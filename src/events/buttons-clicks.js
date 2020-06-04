import {
  openGameSettings,
  renderGameMenu,
  hiddenEndGameWindow,
  showEndGameWindow,
} from "../engine/gameFieldActivity.js";
import { startGame } from "../engine/newGame.js";
import { gameState, saveGameResult } from "../engine/gameStatistics.js";
import { playSound } from "../algorithms/sounds.js";

// This btn removed game-menu and uploaded game-field wich cards
const newGame = () => {
  playSound("dist/sound/buttonClick.mp3");
  startGame();
};

const openSettings = () => {
  playSound("dist/sound/buttonClick.mp3");
  openGameSettings();
};

const endGame = () => {
  playSound("dist/sound/buttonClick.mp3");
  hiddenEndGameWindow();
  saveGameResult();
  gameState.reset();
  setTimeout(renderGameMenu, 300, "game-field");
  return false;
};

export { newGame, openSettings, endGame };
