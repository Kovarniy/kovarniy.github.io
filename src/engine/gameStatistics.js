import { RenderingStopwatch } from "../algorithms/stopwatch.js";

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
  console.log(typeof playerName);
  // TODO придумать, как начислять очки
  const countClicks = gameState.countClicks; // получение количества очков
  const trevelTime = gameState.stopwatch.currentTime; // получение строки с количеством секнд
  // пока тут балванка, но этот алгоритм нужно будет разработать
  const playerPoints = countClicks;

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

export { gameState, saveGameResult };
