/* game settings are stored here */
/* This file may be convert to json if you need to create server side */
let levelOfDifficulty = "Easy";
let cardSet = "cat";

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

const getCardSet = () => {};

export { levelOfDifficulty, cardSet, getFieldSize };
