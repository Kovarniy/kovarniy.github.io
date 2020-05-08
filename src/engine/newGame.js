import { levelOfDifficulty, cardSet, getFieldSize } from "./settings.js";
import { randomInteger } from "../algorithms/numeric.js";

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

const reaquestUrl = "http://127.0.0.1:5500/dist/data/gameData.json";
// request for get cats pictures
const getGameData = (method, url) => {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      const e = new Error("Что-то пошло не так");
      e.data = error;
      throw e;
    });
  });
};

const createGameMatrix = (fieldSize) => {
  let gameMatrix = [];
  let cards = new Map();
  let gameData = getGameData("GET", reaquestUrl);
  console.log(gameData);

  // Набираем список рандомеых картинок
  while (fieldSize / 2 < cards.size) {
    randomInteger(0, 14);
  }
};

const gameInit = () => {
  const fieldSize = getFieldSize();
  addCardsOnField(fieldSize);
  createGameMatrix(fieldSize);
};

export { gameInit };
