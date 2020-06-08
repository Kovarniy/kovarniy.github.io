import { RenderingStopwatch } from "../algorithms/stopwatch.js";
import { getFieldSize } from "./gameSettings.js";
import { createSelector } from "./gameLayout.js";

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
const saveGameResult2 = () => {
  const playerName = document.getElementById("nick-name").value;
  const countClicks = gameState.countClicks;
  const travelTime = gameState.stopwatch.getSecond;
  let playerPoints;
  if (travelTime < MAX_TIME) {
    playerPoints = Math.trunc(
      ((MAX_TIME - travelTime) * countClicks) / getFieldSize()
    );
  } else {
    playerPoints = 100;
  }
  console.log(playerPoints);

  try {
    if (localStorage.getItem(playerName) === null && playerName !== "") {
      console.log("saved to storage");
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

const saveGameResult = () => {
  const playerName = document.getElementById("nick-name").value;
  const countClicks = gameState.countClicks;
  const travelTime = gameState.stopwatch.getSecond;
  let ratingEasyMap = new Map();
  let ratingMediumMap = new Map();
  let ratingHardMap = new Map();
  let fieldsMap = new Map (
    [12, ratingEasyMap],
    [18, ratingMediumMap],
    [24, ratingHardMap]
  );
  let playerPoints;
  if (travelTime < MAX_TIME) {
    playerPoints = Math.trunc(
      ((MAX_TIME - travelTime) * countClicks) / getFieldSize()
    );
  } else {
    playerPoints = 100;
  }
  console.log(playerPoints);
  let ratingThis = fieldsMap.get(getFieldSize());
  try { 
    if (ratingThis.has(playerName)===false && playerName !== "") {
      console.log("saved to storage");
      ratingThis.set(playerName, playerPoints);
      localStorage.setItem(getFieldSize(), JSON.stringify(ratingThis));
    } 
    else {
      const oldCountPoints = ratingThis.get(playerName);
      console.log(oldCountPoints);
      if (playerPoints > parseInt(oldCountPoints))
        ratingThis.set(playerName, playerPoints);
        localStorage.setItem(getFieldSize(), JSON.stringify(ratingThis));
    }
  } catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
      console.log("Превышен лимит");
    }
  }
};




const getGameResults2 = () => {
  const gameRating = [localStorage.length];
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key) && key !== 0) {
      gameRating.push([key, localStorage.getItem(key)]);
    }
  }
  return gameRating;
};
let rateLvl
const setRateLvl = (value) => {
  rateLvl = value;
};

const getGameResults = () => {
  const rating = JSON.parse(localStorage.getItem(12));
  createSelector(
    game-menu,
    setRateLvl,
    ["Easy", "Medium", "Hard"],
    "Easy"
  );
  rateLvl.classList.add(" chosen");
  return rating;
};


export { gameState, saveGameResult, getGameResults };
