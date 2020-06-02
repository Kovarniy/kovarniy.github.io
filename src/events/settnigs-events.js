import {
  levelOfDifficulty as setLevel,
  cardSet as setCardSet,
} from "../engine/settings.js";

const selDifLvl = (value) => {
  setLevel = value;
};

const selectSardSet = (value) => {
  setCardSet = value;
};

export { selDifLvl, selectSardSet };
