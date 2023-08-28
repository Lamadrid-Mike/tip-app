export const extractNumber = (number) => {
  let pattern = /(\d+)/;
  let result = number.match(pattern);
  return result[0];
};

export const insertDecimal = (number) => {
  return (number / 100).toFixed(2);
};

export let tipResult = (a, b) => {
  let result = a * b;
  return result;
};
