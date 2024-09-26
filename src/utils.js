export const add = (numbers = "") => {
  let sum = 0;
  numbers.split(",").forEach((el) => {
    sum = sum + Number(el);
  });

  return sum;
};
