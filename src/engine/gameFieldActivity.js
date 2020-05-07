let test;

// input parameter - elemet which must be removed
const removeField = (elemeintId) => {
  const gameMenu = document.getElementById(elemeintId);
  gameMenu.remove();
};

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

export { removeField, createSelector };
