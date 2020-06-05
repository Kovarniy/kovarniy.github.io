import { setLevel, setCardSet } from "../engine/gameSettings.js";

const selDifLvl = (value) => {
  setLevel(value);
};

const selectSardSet = (value) => {
  setCardSet(value);
};

export { selDifLvl, selectSardSet };
