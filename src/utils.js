export const add = (numbers = "") => {
  let sum = 0;
  numbers.split(/,|\n/g).forEach((el) => {
    sum = sum + Number(el);
  });

  return sum;
};
