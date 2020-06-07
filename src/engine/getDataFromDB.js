import { getJsonFromUrl } from "../algorithms/requests.js";
// TODO GAME_DATA_URL используется в нескольниких местах, есть смысл создать файл с
// переменными "среды окружения"
const GAME_DATA_URL = "/dist/data/gameData.json";

const gatCardsNames = async () => {
  const gameDataResponse = await getJsonFromUrl(GAME_DATA_URL);
  let cardSets = [];
  for (let key in gameDataResponse) {
    cardSets.push(key);
  }
  return cardSets;
};

export { gatCardsNames };
