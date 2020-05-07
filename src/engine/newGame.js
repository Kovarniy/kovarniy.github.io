import { levelOfDifficulty, cardSet } from "./settings.js";

let getFieldSize = (_levelOfDifficulty) => {
  switch (_levelOfDifficulty) {
    case "Easy":
      return 12;
    case "Medium":
      return 18;
    case "Hard":
      return 24;
    default:
      return 12;
  }
};

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

const gameInit = () => {
  const fieldSize = getFieldSize(levelOfDifficulty);
  addCardsOnField(fieldSize);
};

export { gameInit };
