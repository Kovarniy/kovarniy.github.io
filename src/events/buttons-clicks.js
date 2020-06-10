import {
  renderGameSettings,
  renderGameMenu,
  hiddenEndGameWindow,
  renderRatingMenu,
} from "../engine/gameLayout.js";
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
  renderGameSettings();
};

const openRating = () => {
  playSound("dist/sound/buttonClick.mp3");
  renderRatingMenu();
};

const endGame = () => {
  playSound("dist/sound/buttonClick.mp3");
  saveGameResult();
  gameState.reset();
  hiddenEndGameWindow();
  setTimeout(renderGameMenu, 300, "game-field");
  return false;
};

export { newGame, openRating, openSettings, endGame };
