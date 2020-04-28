let test;

// input parameter - elemet which must be removed
const removeField = (elemeintId) => {
  const gameMenu = document.getElementById(elemeintId);
  gameMenu.remove();
};

const createSelector = (inEl, nodeName) => {
  let selector = document.createElement("select");
  if (nodeName === "difficultyLvl") {
    selector.innerHTML = `<option selected value="1" >Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>`;
  }
  if (nodeName === "cardSet") {
    selector.innerHTML = `<option selected >Set1</option>
                        <option>Set2</option>
                        <option>Set3</option>`;
  }
  inEl.append(selector);
};

// This btn removed game-menu and uploaded game-field wich cards
const newGame = () => {
  const doc = document.getElementById("work-space");
  removeField("game-menu");

  // TODO: fieldSize - this parametr must be upload from settings.json
  const fieldSize = 12;
  for (let i = 0; i < fieldSize; i++) {
    let div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("id", `${i}-card`);
    div.innerHTML = `<div class="front-card">front</div>
          <div class="back-card">back</div>`;
    doc.append(div);
  }
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

export { newGame, openOptions };
