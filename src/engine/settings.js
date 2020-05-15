/* game settings are stored here */
/* This file may be convert to json if you need to create server side */
// TODO: rewrite this cod to Object!!!
let levelOfDifficulty = "Easy";
let cardSet = "catSet";

const getFieldSize = () => {
  switch (levelOfDifficulty) {
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

const getCardSetName = () => {
  return cardSet;
};

export { getCardSetName, getFieldSize };
