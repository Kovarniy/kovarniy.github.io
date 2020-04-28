let test;

// This btn removed game-menu and uploaded game-field wich cards
const newGame = () => {
  const doc = document.getElementById("work-space");
  const gameMenu = document.querySelector(".game-menu");
  gameMenu.remove();

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

export { newGame };
