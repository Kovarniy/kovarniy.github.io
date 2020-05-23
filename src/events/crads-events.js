let countUpCards = 0;

const checkCardsMatches = () => {
  const invertedСards = document.querySelectorAll(`[activated="true"]`);
  // In this version comparison is performed for url to backround-image
  // This solution can be replaced by comparison by id
  const card1Back = invertedСards[0].lastChild;
  const card2Back = invertedСards[1].lastChild;
  if (card1Back.style.backgroundImage === card2Back.style.backgroundImage) {
    invertedСards[0].setAttribute("selected", true);
    invertedСards[1].setAttribute("selected", true);
  }
  invertedСards[0].setAttribute("activated", false);
  invertedСards[1].setAttribute("activated", false);
};

const rollCard = (div) => {
  console.log(div);

  if (div.getAttribute("activated") && countUpCards < 2) {
    div.setAttribute("activated", true);
    countUpCards++;
  }

  if (countUpCards == 2) {
    setTimeout(checkCardsMatches, 2000);
    countUpCards = 0;
  }
};

export { rollCard };
