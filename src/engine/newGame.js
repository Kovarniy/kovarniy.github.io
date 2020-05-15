import { getCardSetName, getFieldSize } from "./settings.js";
import { randomInteger } from "../algorithms/numeric.js";
import { getJsonFromUrl } from "../algorithms/requests.js";

const GAME_DATA_URL = "http://127.0.0.1:5500/dist/data/gameData.json";

// Предпологаяю, что эта функция должна храниться в gameFieldActivity и вызываться
//   при клике на кнопку "новая игрв"
const addCardsOnField = (fieldSize) => {
  const doc = document.getElementById("work-space");
  for (let i = 0; i < fieldSize; i++) {
    let div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("id", `${i}-card`);
    div.innerHTML = `<div class="front-card">front</div>
          <div class="back-card">back</div>`;
    doc.append(div);
  }
};

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

  console.log(pictureStore);
  return pictureStore;
};

const generateCardPosition = (fieldSize, cardsMap) => {
  let cardSet = new Set();
  let posArray = [];
  let index = 0;
  while (cardSet.size < fieldSize) {
    const pos1 = randomInteger(0, 14);
    const pos2 = randomInteger(0, 14);
    if (!pictureStore.has(pos1) && !pictureStore.has(pos1)) {
      hasEl.add(pos1);
      hasEl.add(pos2);
      posArray[pos1] = index;
      index++;
      posArray[pos2] = index;
    }
  }
};

const createGameMatrix = (fieldSize, cardSetName) => {
  const pictureStore = getCards(fieldSize, cardSetName);
};

const gameInit = () => {
  const fieldSize = getFieldSize();
  const cardSetName = getCardSetName();
  addCardsOnField(fieldSize);
  createGameMatrix(fieldSize, cardSetName);
};

export { gameInit };
