import { RenderingStopwatch } from "../algorithms/stopwatch.js";
import { getFieldSize} from "./gameSettings.js";

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


function mapToObj(map){
  const obj = {}
  for (let [k,v] of map)
    obj[k] = v
  return obj
}


const MAX_TIME = 600;

const saveGameResult = () => {
  const playerName = document.getElementById("nick-name").value;
  const countClicks = gameState.countClicks;
  const travelTime = gameState.stopwatch.getSecond;
  const ratingEasyMap = new Map();
  const ratingMediumMap = new Map();
  const ratingHardMap = new Map();
  const fieldsMap = new Map ([
    [12, ratingEasyMap],
    [18, ratingMediumMap],
    [24, ratingHardMap]
  ]);
  let playerPoints;
  if (travelTime < MAX_TIME) {
    playerPoints = Math.trunc(
      ((MAX_TIME - travelTime) * countClicks) / getFieldSize()
    );
  } else {
    playerPoints = 100;
  }
 let oldCountPoints;
  const ratingThis = fieldsMap.get(getFieldSize());
  let isInRating = false; 
  let everythingElse = localStorage.getItem(getFieldSize());
  for (let [key, value] of Object.entries(JSON.parse("["+localStorage.getItem(getFieldSize())+"]"))) {
    if (parseInt(key)< 10) {
      for (let [key2, value2] of Object.entries(value)){
        if(key2==playerName){
          oldCountPoints=value2
          isInRating=true;
        }
      }
    }
  }
  try { 
    if (!isInRating) {
      
      ratingThis.set(playerName,playerPoints);
      let myjsonmap = mapToObj(ratingThis);
      localStorage.setItem(getFieldSize(), JSON.stringify(myjsonmap)+","+everythingElse);
    } 
    else {
      if (playerPoints > parseInt(oldCountPoints))
        ratingThis.set(playerName, playerPoints);
        let myjsonmap = mapToObj(ratingThis);
        localStorage.setItem(getFieldSize(), JSON.stringify(myjsonmap)+","+everythingElse);
    }
  } catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
      console.log("Превышен лимит");
    }
  }
}

const getGameResults = (rateLevel) => {
  const rating =JSON.parse("["+localStorage.getItem(rateLevel)+"]");
  return rating;
};


export { gameState, saveGameResult, getGameResults};
