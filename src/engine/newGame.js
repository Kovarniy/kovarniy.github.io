import { levelOfDifficulty, cardSet, getFieldSize } from "./settings.js";
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

const createGameMatrix = (fieldSize) => {
  let gameMatrix = [];
  getJsonFromUrl(GAME_DATA_URL).then((data) => console.log(data));

  // while (fieldSize / 2 < cards.size) {
  //   randomInteger(0, 14);
  // }
  // TODO: выбрать позиции для картинок
};

const gameInit = () => {
  const fieldSize = getFieldSize();
  addCardsOnField(fieldSize);
  createGameMatrix(fieldSize);
};

export { gameInit };
