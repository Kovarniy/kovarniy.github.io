import { RenderingStopwatch } from "../algorithms/stopwatch.js";
import { levelOfDifficulty, getFieldSize } from "./gameSettings.js";

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

const saveGameResult = () => {
  const playerName = document.getElementById("nick-name").value;
  console.log(playerName);

  // TODO придумать, как начислять очки
  const countClicks = gameState.countClicks; // получение количества очков
  const trevelTime = gameState.stopwatch.getSecond; // получение строки с количеством секнд
  console.log(trevelTime);
  //подсчет очков по формуле
  const playerPoints = Math.trunc(
    ((600 - TimerForPoints) * countClicks) / getFieldSize()
  );

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
  let ind = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      console.log(`${key}, ${localStorage.getItem(key)}`);
      gameRating[ind] = [key, localStorage.getItem(key)];
      ind++;
    }
  }
  return gameRating;
};

export { gameState, saveGameResult, getGameResults };
