import { removeField, createSelector } from "../engine/gameFieldActivity.js";
import { gameInit } from "../engine/newGame.js";

// This btn removed game-menu and uploaded game-field wich cards
const newGame = () => {
  removeField("game-menu");
  gameInit();
};

const openOptions = () => {
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

const cardClick = () => {
  
}

export { newGame, openOptions };
