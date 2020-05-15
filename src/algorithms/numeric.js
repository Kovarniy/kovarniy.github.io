// This file includes algorithms for numeric operations

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export { randomInteger };
