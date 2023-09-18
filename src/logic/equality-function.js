export const equalityFunction = (a, b) => {
  return a.match(/\w+/i)[0].toLowerCase() === b.match(/\w+/i)[0].toLowerCase();
};
