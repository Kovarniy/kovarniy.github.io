import { getCardSetName, getFieldSize } from "./settings.js";
import { randomInteger } from "../algorithms/numeric.js";
import { getJsonFromUrl } from "../algorithms/requests.js";
import { gameState } from "../engine/gameStatistics.js";
import { genetateGameField } from "../engine/gameFieldActivity.js";
import { showEndGameWindow } from "../engine/gameFieldActivity.js";

const GAME_DATA_URL = "/dist/data/gameData.json";

// It's functions need for formed game map
// this function get Json from server and formed map answer with cards links
const getCards = async (fieldSize, cardSetName) => {
  const gameDataResponse = await getJsonFromUrl(GAME_DATA_URL);
  const pictureStore = new Map();
  // Данный set нужен для недопуска добавления повторяющихся жл в map
  let hasEl = new Set();
  let index = 0;
  while (pictureStore.size < fieldSize / 2) {
    const id = randomInteger(0, 14);
    const link = gameDataResponse[cardSetName][id]["link"];
    if (!hasEl.has(id)) {
      hasEl.add(id);
      pictureStore.set(index, link);
      index++;
    }
  }

  return pictureStore;
};

const generateCardPosition = (fieldSize, cardsMap) => {
  let cardSet = new Set();
  let posArray = [];
  let index = 0;

  while (cardSet.size < fieldSize) {
    let countUniqEl = 0;
    // Generate two uniq pos for equal cards
    while (countUniqEl < 2) {
      const pos = randomInteger(0, fieldSize - 1);
      if (!cardSet.has(pos)) {
        cardSet.add(pos);
        posArray[pos] = index;
        countUniqEl++;
      }
    }
    index++;
  }
  console.log(posArray);
  return posArray;
};

const renderBackSide = (posArray, cardsMap) => {
  console.log(cardsMap);
  const doc = document.getElementById("work-space");
  let index = 0;
  for (let node of doc.children) {
    if (node.tagName !== "SPAN") {
      let numOfCard = posArray[index];
      let link = cardsMap.get(numOfCard);
      node.children[1].style.backgroundImage = `url(${link})`;
      node.children[1].style.backgroundSize = "100%";
      index++;
    }
  }
};

const createGameMatrix = async (fieldSize, cardSetName) => {
  const pictureStore = await getCards(fieldSize, cardSetName);
  const posArray = generateCardPosition(fieldSize, pictureStore);
  renderBackSide(posArray, pictureStore);
};
//

const startGame = () => {
  const fieldSize = getFieldSize();
  const cardSetName = getCardSetName();
  genetateGameField(fieldSize);
  createGameMatrix(fieldSize, cardSetName);
  gameState.stopwatch.start();
  showEndGameWindow();
};

export { startGame };
