import { rollCard } from "../events/crads-events.js";
import { gameState, getGameResults } from "./gameStatistics.js";
import {
  selDifLvl,
  selectSardSet,
  setRateLvl,
} from "../events/settnigs-events";
import { newGame, openRating, openSettings } from "../events/buttons-clicks.js";
import {
  getFieldSize,
  levelOfDifficulty,
  getCardSetName,
} from "./gameSettings.js";
import { playSound } from "../algorithms/sounds.js";
import { gatCardsNames } from "./getDataFromDB.js";

// create settings selectors and buttons
const createSelector = (inEl, selectorListner, parametrsArray, activEl) => {
  const selector = document.createElement("select");
  selector.classList.add("settingsSelector");

  let inText = "";
  selector.onchange = function () {
    selectorListner(selector.value);
  };

  parametrsArray.forEach((el) => {
    if (activEl === el)
      inText += `<option selected value="${el}" >${el}</option>`;
    else inText += `<option value="${el}">${el}</option>`;
  });
  selector.innerHTML = inText;

  inEl.append(selector);
};

const createBackBtn = (context) => {
  let button = document.createElement("button");
  button.onclick = function () {
    playSound("dist/sound/buttonClick.mp3");
    renderGameMenu("game-menu");
  };
  button.classList.add("menu-btn");
  button.innerText = "Back";
  button.setAttribute("id", "back-to-main-menu-btn");
  context.append(button);
};

//------------------------------------------------

// input parameter - elemet which must be removed
const removeField = (elemeintId) => {
  const removedActivity = document.getElementById(elemeintId);
  removedActivity.remove();
};

const renderGameSettings = async () => {
  removeField("game-menu");
  const workSpace = document.getElementById("work-space");
  let settingsMenu = document.createElement("div");
  settingsMenu.setAttribute("id", "game-menu");
  workSpace.append(settingsMenu);

  const cardSets = await gatCardsNames();
  createSelector(
    settingsMenu,
    selDifLvl,
    ["Easy", "Medium", "Hard"],
    levelOfDifficulty
  );

  createSelector(settingsMenu, selectSardSet, cardSets, getCardSetName);
  createBackBtn(settingsMenu);
};
//------------------------------------------------

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
    if (getFieldSize() === 12) div.classList.add("easy");
    if (getFieldSize() === 18) div.classList.add("medium");
    if (getFieldSize() === 24) div.classList.add("hard");

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
//------------------------------------------------

// Game menu
const renderGameMenu = (oldActivity) => {
  removeField(`${oldActivity}`);
  const doc = document.getElementById("work-space");
  const div = document.createElement("div");
  div.setAttribute("id", "game-menu");
  div.innerHTML = `<button class="menu-btn" id="new-game-btn">New Game</button>
                   <button class="menu-btn" id="rating-btn">Rating</button>
                   <button class="menu-btn" id="options-btn">Options</button>`;
  doc.append(div);
  addGameMenuListner();
};

const addGameMenuListner = () => {
  const newGameBtn = document.getElementById("new-game-btn");
  const ratingBtn = document.getElementById("rating-btn");
  const optionsBtn = document.getElementById("options-btn");
  newGameBtn.onclick = newGame;
  ratingBtn.onclick = openRating;
  optionsBtn.onclick = openSettings;
};
//------------------------------------------------

// rating
const renderRating = (domEl, level) => {
  let gameResults = localStorage.getItem(level);

  if (gameResults !== null) {
    gameResults = JSON.parse(gameResults);
    gameResults.forEach((el) => {
      const playerInfo = document.createElement("p");
      playerInfo.innerText = `${el.name} : ${el.points}`;
      domEl.append(playerInfo);
    });
  } else {
    const playerInfo = document.createElement("p");
    playerInfo.innerText = `You can be the first!`;
    domEl.prepend(playerInfo);
  }
};

const radioRatingInit = () => {
  const lvls = ["Easy", "Medium", "Hard"];
  lvls.forEach((el) => {
    const domEl = document.getElementById(el);
    domEl.onclick = function () {
      removeField("rating");
      let div = document.createElement("div");
      div.setAttribute("id", "rating");
      document.getElementById("radio-btns").after(div);
      renderRating(document.getElementById("rating"), el);
    };
  });
};

const renderRatingMenu = () => {
  removeField("game-menu");
  const workSpace = document.getElementById("work-space");
  let div = document.createElement("div");
  div.setAttribute("id", "game-menu");
  div.innerHTML = `<div id="radio-btns">  
                      <div  class="form_radio_btn" >
                        <input type="radio" name="lvl" id="Easy" checked>
                        <label for="Easy">Easy</label>
                      </div>
                      <div class="form_radio_btn">
                        <input type="radio" name="lvl" id="Medium">
                        <label for="Medium">Medium</label>
                      </div>
                      <div  class="form_radio_btn" >
                        <input type="radio" name="lvl" id="Hard">
                        <label for="Hard">Hard</label>
                      </div>
                   </div>
                   <div id="rating"></div>
                   <div id="btn-div"></div>`;
  workSpace.append(div);
  createBackBtn(document.getElementById("btn-div"));

  radioRatingInit();

  const ratingMenu = document.getElementById("rating");
  renderRating(ratingMenu, "Easy");
};

//

// Modal window
const hiddenEndGameWindow = () => {
  const modalWindow = document.getElementById("modalDialog");
  document.getElementById("nick-name").value = "";
  modalWindow.style.top = "-999px";
  setTimeout(() => {
    const backModal = document.getElementById("openModal");
    backModal.style.visibility = "hidden";
  }, 500);
};

const showEndGameWindow = () => {
  const backModal = document.getElementById("openModal");
  backModal.style.visibility = "visible";
  const modalWindow = document.getElementById("modalDialog");
  modalWindow.style.top = "0px";
  modalWindow.childNodes[3].innerText = `Travel time: ${gameState.stopwatch.toString()}`;
  modalWindow.childNodes[5].innerText = `Number of Clicks: ${gameState.countClicks}`;
};
//

export {
  renderGameSettings,
  genetateGameField,
  showEndGameWindow,
  renderGameMenu,
  hiddenEndGameWindow,
  renderRatingMenu,
  createSelector,
};
