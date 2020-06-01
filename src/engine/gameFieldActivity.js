import { rollCard } from "../events/crads-events.js";
import { gameState } from "../engine/gameStatistics.js";
// create settings sekectors
const createSelector = (inEl, nodeName) => {
  let selector = document.createElement("select");
  if (nodeName === "difficultyLvl") {
    selector.innerHTML = `<option selected value="1" >Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>`;
  }
  if (nodeName === "cardSet") {
    selector.innerHTML = `<option selected >Cats</option>
                        <option>People</option>
                        <option>Paintings</option>`;
  }
  inEl.append(selector);
};

// input parameter - elemet which must be removed
const removeField = (elemeintId) => {
  const removedActivity = document.getElementById(elemeintId);
  removedActivity.remove();
};

const openGameSettings = () => {
  removeField("game-menu");
  const doc = document.getElementById("work-space");
  let div = document.createElement("div");
  div.setAttribute("id", "game-menu");
  doc.append(div);

  createSelector(div, "difficultyLvl");
  createSelector(div, "cardSet");

  let button = document.createElement("button");
  button.classList.add("menu-btn");
  button.innerText = "Back";
  button.setAttribute("id", "back-to-main-menu-btn");
  div.append(button);
};

// game field
const addInfoBar = () => {
  const doc = document.getElementById("work-space");
  const gameField = document.createElement("div");
  gameField.setAttribute("id", "game-field");
  gameField.innerHTML = `<span id="infoBar">
                            <p id="countClick"><b>Number of clicks:</b> 0</p> 
                            <p id="stopwatch"><b>Time:</b> 00:00:00</p>
                         </span>`;
  doc.append(gameField);
};

const addCardsOnField = (fieldSize) => {
  const doc = document.getElementById("game-field");

  for (let i = 0; i < fieldSize; i++) {
    const div = document.createElement("div");
    div.classList.add("card");

    //Alternative solution - use Event delegation on work-space
    div.onclick = function () {
      rollCard(div);
    };
    div.setAttribute("activated", false);

    div.setAttribute("id", `${i}-card`);
    div.innerHTML = `<div class="front-card" activated="false"></div>
          <div class="back-card"></div>`;
    doc.append(div);
  }
};

const genetateGameField = (fieldSize) => {
  removeField("game-menu");
  addInfoBar();
  addCardsOnField(fieldSize);
};
//

const renderGameMenu = () => {
  removeField("game-field");
  const doc = document.getElementById("work-space");
  const div = document.createElement("div");
  div.setAttribute("id", "game-menu");
  div.innerHTML = `<button class="menu-btn" id="new-game-btn">New Game</button>
                   <button class="menu-btn" id="options-btn">Options</button>`;
  doc.append(div);
  const backModal = document.getElementById("openModal");
  backModal.style.visibility = "hidden";
  const modalWindow = document.getElementById("modalDialog");
  modalWindow.style.top = "-999px";
};

const showEndGameWindow = () => {
  const backModal = document.getElementById("openModal");
  backModal.style.visibility = "visible";
  const modalWindow = document.getElementById("modalDialog");
  modalWindow.style.top = "0px";
  console.log(modalWindow.childNodes[3]);
  console.log(modalWindow.childNodes[5]);
  modalWindow.childNodes[3].innerText = `Travel time: ${gameState.countClicks}`;
  modalWindow.childNodes[5].innerText = `Number of Clicks: ${gameState.stopwatch.currentTime}`;
};

export {
  openGameSettings,
  genetateGameField,
  showEndGameWindow,
  renderGameMenu,
};
