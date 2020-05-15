// This file includes algorithms for numeric operations

let randomInteger;
export default randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
