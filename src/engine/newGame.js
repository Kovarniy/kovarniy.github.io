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

// TODO: тут добавится еше один параметр, который будет обозначать название набора карточек
// он будет передавваться вместо "catSet"
const getCards = async (fieldSize, cardSetName) => {
  const gameDataResponse = await getJsonFromUrl(GAME_DATA_URL);
  const pictureStore = new Map();
  while (pictureStore.size < fieldSize / 2) {
    const id = randomInteger(0, 14);
    const link = gameDataResponse[cardSetName][id]["link"];
    console.log(id, link);
    if (!pictureStore.has(id)) {
      pictureStore.set(id, link);
    }
  }
  return pictureStore;
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
