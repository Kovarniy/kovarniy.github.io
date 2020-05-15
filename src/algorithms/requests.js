// This file includes functions for requests to server and etc

// This function return Json from url
let getJsonFromUrl;
export default getJsonFromUrl = (url) => {
  return fetch(url).then((responce) => {
    return responce.json();
  });
};
