import { getFieldSize } from "../engine/settings.js";
let countUpCards = 0;
let totalCount = 0;

const checkCardsMatches = () => {
  const invertedСards = document.querySelectorAll(`[activated="true"]`);
  // In this version comparison is performed for url to backround-image
  // This solution can be replaced by comparison by id
  const card1Back = invertedСards[0].lastChild;
  const card2Back = invertedСards[1].lastChild;
  if (card1Back.style.backgroundImage === card2Back.style.backgroundImage) {
    invertedСards[0].setAttribute("selected", true);
    invertedСards[1].setAttribute("selected", true);
    totalCount += 2;
    invertedСards[0].setAttribute("activated", false);
    invertedСards[1].setAttribute("activated", false);
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

const rollCard = (div) => {
  if (div.getAttribute("activated") && countUpCards < 2) {
    div.setAttribute("activated", true);
    countUpCards++;
  }

  if (countUpCards == 2) {
    countUpCards = 0;
    checkCardsMatches();
  }
  // Это нужно переделать
  if (getFieldSize() == totalCount) {
    alert("Вы прошли игру!");
  }
};

export { rollCard, totalCount };
