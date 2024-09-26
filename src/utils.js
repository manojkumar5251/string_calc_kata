export const add = (numbers = "") => {
  let sum = 0;
  let delimitor = ",|\n";
  let negativeNumbers = "";
  const isDynamicDelimitor = numbers.indexOf("//") !== -1;

  if (isDynamicDelimitor) {
    const endIndex = numbers.indexOf("\n");
    delimitor = numbers.slice(2, endIndex);
    numbers = numbers.slice(endIndex);
  }

  numbers.split(new RegExp(delimitor, "g")).forEach((el) => {
    if (Number(el) <= 0) {
      negativeNumbers = negativeNumbers + (negativeNumbers ? "," : "") + el;
    }
    sum = sum + Number(el);
  });

  if (negativeNumbers) {
    throw new Error(negativeNumbers);
  }

  return sum;
};
