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
    let numOfCard = posArray[index];
    let link = cardsMap.get(numOfCard);
    node.children[1].style.backgroundImage = `url(${link})`;
    index++;
  }
};

const createGameMatrix = async (fieldSize, cardSetName) => {
  const pictureStore = await getCards(fieldSize, cardSetName);
  const posArray = generateCardPosition(fieldSize, pictureStore);
  renderBackSide(posArray, pictureStore);
};

const gameInit = () => {
  const fieldSize = getFieldSize();
  const cardSetName = getCardSetName();
  addCardsOnField(fieldSize);
  createGameMatrix(fieldSize, cardSetName);
};

export { gameInit };
