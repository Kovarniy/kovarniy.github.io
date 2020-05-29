import { openGameSettings } from "../engine/gameFieldActivity.js";
import { startGame } from "../engine/newGame.js";

// This btn removed game-menu and uploaded game-field wich cards
const newGame = () => {
  startGame();
};

const openSettings = () => {
  openGameSettings();
};

export { newGame, openSettings };
