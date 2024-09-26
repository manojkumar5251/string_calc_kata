export const add = (numbers = "") => {
  let sum = 0;
  let delimitor = ",|\n";
  const isDynamicDelimitor = numbers.indexOf("//") !== -1;

  if (isDynamicDelimitor) {
    const endIndex = numbers.indexOf("\n");
    delimitor = numbers.slice(2, endIndex);
    numbers = numbers.slice(endIndex);
  }

  numbers.split(new RegExp(delimitor, "g")).forEach((el) => {
    sum = sum + Number(el);
  });

  return sum;
};
