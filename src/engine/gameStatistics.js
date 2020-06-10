import { RenderingStopwatch } from "../algorithms/stopwatch.js";
import { getFieldSize, levelOfDifficulty } from "./gameSettings.js";

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
const calcGamePoints = () => {
  const countClicks = gameState.countClicks;
  const spendTime = gameState.stopwatch.getSecond;
  if (spendTime < MAX_TIME) {
    return Math.trunc(((MAX_TIME - spendTime) / countClicks) * getFieldSize());
  }
  return 100;
};

const addNewRecord = (obj, playerName, newPlayerPoints) => {
  let hasName = false;
  obj.forEach((el, ind) => {
    if (el.name === playerName) {
      if (el.points < newPlayerPoints) {
        el.points = newPlayerPoints;
      } else {
        hasName = true;
      }
      return;
    } else if (ind === obj.length - 1 && !hasName) {
      obj.push({ name: playerName, points: newPlayerPoints });
      return;
    }
  });
  return obj;
};

const checkRating = (rating) => {
  rating.sort((a, b) => {
    return b.points - a.points;
  });
  if (rating.length > 10) rating.pop();
  return rating;
};

const saveGameResult = () => {
  const playerName = document.getElementById("nick-name").value;
  const playerPoints = calcGamePoints();

  let rating = localStorage.getItem(levelOfDifficulty);
  if (rating !== null) {
    console.log("Yes");
    rating = addNewRecord(JSON.parse(rating), playerName, playerPoints);
    rating = checkRating(rating);
  } else {
    console.log("No");
    rating = [{ name: playerName, points: playerPoints }];
  }

  localStorage.setItem(levelOfDifficulty, JSON.stringify(rating));
};

// deprecated
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
