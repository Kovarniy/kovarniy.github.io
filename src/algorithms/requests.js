// This file includes functions for requests to server and etc

// This function return Json from url
const getJsonFromUrl = (url) => {
  return fetch(url).then((responce) => {
    return responce.json();
  });
};

export { getJsonFromUrl };
