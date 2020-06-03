import {
  openGameSettings,
  renderGameMenu,
  hiddenEndGameWindow,
} from "../engine/gameFieldActivity.js";
import { startGame } from "../engine/newGame.js";
import { gameState } from "../engine/gameStatistics.js";
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
  renderGameMenu("game-field");
  gameState.reset();
};

export { newGame, openSettings, endGame };
