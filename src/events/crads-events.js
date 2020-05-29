import { getFieldSize } from "../engine/settings.js";
import { gameState } from "../engine/gameStatistics.js";

const checkCardsMatches = () => {
  const invertedСards = document.querySelectorAll(`[activated="true"]`);
  // In this version comparison is performed for url to backround-image
  // This solution can be replaced by comparison by id
  const card1Back = invertedСards[0].lastChild;
  const card2Back = invertedСards[1].lastChild;
  if (card1Back.style.backgroundImage === card2Back.style.backgroundImage) {
    invertedСards[0].setAttribute("selected", true);
    invertedСards[1].setAttribute("selected", true);
    gameState.totalCountUpCards += 2;
    invertedСards[0].setAttribute("activated", false);
    invertedСards[1].setAttribute("activated", false);
    setTimeout(checkEndGame, 1000);
  } else {
    rollDisabled();
    setTimeout(() => {
      invertedСards[0].setAttribute("activated", false);
      invertedСards[1].setAttribute("activated", false);
    }, 1500);
    setTimeout(rollEnabled, 2000);
  }
};

const rollDisabled = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((item) => {
    item.onclick = null;
  });
};

const rollEnabled = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((item) => {
    item.onclick = function () {
      rollCard(item);
    };
  });
};

const checkEndGame = () => {
  if (getFieldSize() == gameState.totalCountUpCards) {
    alert("Вы прошли игру!");
  }
};

let countUpCards = 0;
const rollCard = (div) => {
  // this code work only with non selected and not activated functions
  if (
    !div.hasAttribute("selected") &&
    div.getAttribute("activated") === "false"
  ) {
    gameState.countClicks += 1;
    console.log(gameState);

    if (countUpCards < 2) {
      div.setAttribute("activated", true);
      countUpCards++;
    }

    if (countUpCards == 2) {
      countUpCards = 0;
      checkCardsMatches();
    }
  }
};

export { rollCard };
