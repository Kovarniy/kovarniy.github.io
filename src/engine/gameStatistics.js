import { RenderingStopwatch } from "../algorithms/stopwatch.js";
import { getFieldSize } from "./gameSettings.js";

const gameState = {
  totalCountUpCards: 0,
  countClicks: 0,
  stopwatch: new RenderingStopwatch("stopwatch"),
  reset() {
    this.totalCountUpCards = 0;
    this.countClicks = 0;
    this.stopwatch.reset();
  },
};

const MAX_TIME = 600;
const saveGameResult = () => {
  const playerName = document.getElementById("nick-name").value;
  const countClicks = gameState.countClicks;
  const trevelTime = gameState.stopwatch.getSecond;

  let playerPoints;
  if (trevelTime < MAX_TIME) {
    playerPoints = Math.trunc(
      ((MAX_TIME - trevelTime) * countClicks) / getFieldSize()
    );
  } else {
    playerPoints = 100;
  }
  console.log(playerPoints);

  try {
    if (localStorage.getItem(playerName) === null && playerName !== "") {
      console.log("save to storige");
      localStorage.setItem(playerName, playerPoints.toString());
    } else {
      const oldCountPoints = localStorage.getItem(playerName);
      console.log(oldCountPoints);
      if (playerPoints > parseInt(oldCountPoints))
        localStorage.setItem(playerName, playerPoints.toString());
    }
  } catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
      console.log("Превышен лимит");
    }
  }
};

const getGameResults = () => {
  const gameRating = [localStorage.length];
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key) && key !== 0) {
      gameRating.push([key, localStorage.getItem(key)]);
    }
  }
  return gameRating;
};

export { gameState, saveGameResult, getGameResults };
